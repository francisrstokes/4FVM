const Result = require('folktale/result');
const { __, pipe, compose, identity, ifElse, length, lt, map, objOf, addIndex, nth, merge } = require('ramda');
const { maybe, uint16Array } = require('../util');
const { getNumberArg } = require('../util/args');

// loadWith :: [Int] -> [Uint16] -> [Uint16]
const loadWith = (instructions) =>
  addIndex(map)((v, i) =>
    (i < length(instructions))
      ? nth(i, instructions)
      : v);

// createMachineState :: [Int] -> Result String MachineState
module.exports = (instructions) => {
  return pipe(
    maybe(() => 1024 * 10, identity),
    ifElse(
      lt(__, length(instructions)),
      (mem) => Result.Error(`Program size is larger than available memory (${mem})`),
      compose(Result.Ok, uint16Array)
    ),
    map(loadWith(instructions)),
    map(objOf('memory')),
    map(merge({ registers: { A: 0, B: 0, C: 0, D: 0, F: 0, IP: 0, SP: 0 } }))
  )(getNumberArg('memory-size'));
}
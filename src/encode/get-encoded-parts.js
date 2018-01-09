const ot = require('../operand-types');
const registerMap = require('../register-map');
const opcodes = require('../opcodes');
const {
  __,
  equals,
  ifElse,
  compose,
  prop,
  map
  // indexOf
} = require('ramda');
const { indexOf } = require('../util');

// getEncodedOperand :: Instruction -> [Int]
const getEncodedOperand = ifElse(
  compose(equals(ot.REG), prop('type')),
  compose(indexOf(__, registerMap), prop('value')),
  prop('value')
);

// getEncodedParts :: Instruction -> [Int]
module.exports = (instruction) => {
  return [
    indexOf(prop('type', instruction), opcodes),
    ...map(getEncodedOperand, prop('operands', instruction))
  ]
};
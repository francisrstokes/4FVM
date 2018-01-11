const ot = require('../../constants/operand-types');
const registerMap = require('../../constants/register-map');
const opcodes = require('../../constants/opcodes');
const { indexOf } = require('../../util');
const {
  __,
  equals,
  ifElse,
  compose,
  prop,
  map
  // indexOf
} = require('ramda');

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
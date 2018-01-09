const Future = require('fluture');
const patterns = require('../parser/patterns');
const {
  map,
  compose,
  filter
} = require('ramda');
const { achain, toUint16 } = require('../util');

const getEncodedParts = require('./get-encoded-parts');
const applyLabels = require('./apply-labels');
const createLabelTable = require('./create-label-table');

module.exports = (ast) => {
  const lt = createLabelTable(ast);

  // encode :: [Instruction] -> [Uint16]
  const encode = compose(
    toUint16,
    achain(getEncodedParts),
    map(applyLabels(lt)),
    filter((pattern) => pattern.type !== patterns.LABEL)
  );

  return Future.of(encode(ast));
};

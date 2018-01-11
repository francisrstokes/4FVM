const Result = require('folktale/result');
const patterns = require('../../constants/patterns');
const {
  map,
  compose,
  filter
} = require('ramda');
const { achain, toUint16 } = require('../../util');

const getEncodedParts = require('./get-encoded-parts');
const applyLabels = require('./apply-labels');
const createLabelTable = require('./create-label-table');

// encode :: Result String [Instructions] -> Result String [Uint16]
module.exports = map((ast) => {
  const lt = createLabelTable(ast);

  // encode :: [Instruction] -> [Uint16]
  const encode = compose(
    toUint16,
    achain(getEncodedParts),
    map(applyLabels(lt)),
    filter((pattern) => pattern.type !== patterns.LABEL)
  );

  return encode(ast);
});

const patterns = require('../../constants/patterns');
const {
  map,
  compose,
  filter,
  concat
} = require('ramda');
const { achain, toUint16 } = require('../../util');
const HEADER = require('../../constants/header');

const getEncodedParts = require('./get-encoded-parts');
const applyLabels = require('./apply-labels');
const createLabelTable = require('./create-label-table');


// encode :: Result String [Instructions] -> Result String [Uint16]
module.exports = map((ast) => {
  const lt = createLabelTable(ast);

  // encode :: [Instruction] -> [Uint8]
  const encode = compose(
    x => {
      const y = 0;
      return x;
    },
    toUint16,
    // alignTo8Bits,
    concat(HEADER),
    achain(getEncodedParts),
    map(applyLabels(lt)),
    filter((pattern) => pattern.type !== patterns.LABEL)
  );

  return encode(ast);
});

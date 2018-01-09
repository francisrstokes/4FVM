const Future = require('fluture');
const patterns = require('../parser/patterns');
const {
  map,
  compose,
  filter
} = require('ramda');
const { achain } = require('../util');

const getEncodedParts = require('./get-encoded-parts');
const applyLabels = require('./apply-labels');
const createLabelTable = require('./create-label-table');
const toUint16 = require('./to-uint16');

module.exports = (ast) => {
  const lt = createLabelTable(ast);

  const encode = compose(
    toUint16,
    achain(getEncodedParts),
    map(applyLabels(lt)),
    filter((pattern) => pattern.type !== patterns.LABEL)
  );

  return Future.of(encode(ast));
};

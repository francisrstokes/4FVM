const Future = require('fluture');
const patterns = require('../parser/patterns');
const {
  map,
  compose,
  filter
} = require('ramda');

const getEncodedParts = require('./get-encoded-parts');
const applyLabels = require('./apply-labels');
const createLabelTable = require('./create-label-table');

module.exports = (ast) => {
  const lt = createLabelTable(ast);

  const encode = compose(
    map(getEncodedParts),
    map(applyLabels(lt)),
    filter((pattern) => pattern.type !== patterns.LABEL)
  );

  const nast = encode(ast);
  debugger;
  return Future.of(ast);
};

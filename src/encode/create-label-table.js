const patterns = require('../parser/patterns');
const { indexedReduce } = require('../util');
const { getLabelValue } = require('../util/labels');
const {
  keys,
  merge
} = require('ramda');

module.exports = indexedReduce((acc, pattern, index) => {
  if (pattern.type === patterns.LABEL) {
    return merge({ [getLabelValue(pattern)]: index - keys(acc).length }, acc);
  }
  return acc;
}, {});
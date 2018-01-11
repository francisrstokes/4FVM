const patterns = require('../../constants/patterns');
const { indexedReduce } = require('../../util');
const { getLabelValue } = require('../../util/labels');
const {
  keys,
  merge
} = require('ramda');

// createLabelTable :: [Instructions] -> Dict String Int
module.exports = indexedReduce((acc, pattern, index) => {
  if (pattern.type === patterns.LABEL) {
    return merge({ [getLabelValue(pattern)]: index - keys(acc).length }, acc);
  }
  return acc;
}, {});
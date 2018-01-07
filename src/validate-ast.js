const patterns = require('./parser/patterns');
const { getLabelValue } = require('./util/labels');
const { reduce, merge } = require('ramda');

const doubleLabelCheck = reduce((prev, next) => {
  if (prev.found) return prev;

  const isDoubleLabel = (prev.type === patterns.LABEL && next.type === patterns.LABEL);
  const msg = (isDoubleLabel)
    ? `4FVM Program cannot contain sequential labels. Found @ label [${getLabelValue(prev)}]`
    : '';
  return merge(next, { found: isDoubleLabel, msg });
}, { type: null, found: false, msg: '' });

module.exports = (ast) => {
  const { found, msg } = doubleLabelCheck(ast);
  if (found) {
    throw new Error(msg);
  }

  return ast;
};


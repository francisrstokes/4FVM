
const opcodes = require('../opcodes');
const patterns = require('../parser/patterns');
const { nativeToString, regexTest, indexOf, indexedReduce, isString } = require('../util');
const { getLabelValue } = require('../util/labels');
const { and, keys, ifElse, identity, merge, map, compose, prop, filter, nth } = require('ramda');
const registerMap = require('../register-map');

const labelTable = indexedReduce((acc, pattern, index) => {
  if (pattern.type === patterns.LABEL) {
    return merge({ [getLabelValue(pattern)]: index - keys(acc).length }, acc);
  }
  return acc;
}, {});

// Return maybes here?
const applyLabel = (lt) => (pattern) => {
  return merge(pattern, {
    operands: map(
      (operand) => {
        const newValue = compose(
          ifElse(
            (x) => {
              return compose(regexTest(/^[a-zA-Z_]+:$/), nativeToString)(x)
            },
            (label) => {
              return prop(label, lt)
            },
            identity
          ),
          nth(1)
        )(operand);
        return [nth(0, operand), newValue];
      }, pattern.operands)
  });
}

module.exports = (ast) => {
  const lt = labelTable(ast);

  const encode = compose(
    map(applyLabel(lt)),
    filter((pattern) => pattern.type !== patterns.LABEL)
  );

  const nast = encode(ast);
  debugger;
  return ast;
};

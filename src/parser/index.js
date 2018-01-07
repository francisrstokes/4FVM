const preprocessTokens = require('./preprocess-tokens');
const validPatterns = require('./valid-patterns');

const { flip, nth, prop, map, compose } = require('ramda');

const first = nth(0);

const matchPattern = (checkTokens) => (validTokens, ci) => {
  return validTokens.includes(checkTokens[ci].type);
};

const populateOperandPair = (checkTokens) => (pair) => {
  const getTokenValueFromPair = compose(prop('value'), flip(nth)(checkTokens), nth(1));
  return [
    first(pair),
    getTokenValueFromPair(pair)
  ];
};

module.exports = (_tokens) => {
  const tokens = preprocessTokens(_tokens);
  const tree = [];

  for (let i = 0; i < tokens.length; i++) {
    const startTree = tree.length;
    for (const [check, descriptor] of validPatterns) {
      // Exit if there aren't enough tokens to check
      if (i + check.length > tokens.length) continue;

      const checkTokens = tokens.slice(i, i + check.length);
      const isMatch = check.every(matchPattern(checkTokens));

      if (isMatch) {
        const operands = map(populateOperandPair(checkTokens), descriptor.operands);
        tree.push({
          type: descriptor.type,
          operands
        });
        i += check.length - 1;
        break;
      }
    }
    if (startTree === tree.length) {
      throw new Error('Invalid instruction encountered at token: ', JSON.stringify(tokens[i]));
    }
  }

  return tree;
};

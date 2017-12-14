const preprocessTokens = require('./preprocess-tokens');
const validPatterns = require('./valid-patterns');

// console.log(validPatterns.length)

const matchPattern = (checkTokens) =>
  (validTokens, ci) => {
    return validTokens.includes(checkTokens[ci].type);
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
        const operands = descriptor.operands.map(index => checkTokens[index]);
        tree.push({
          type: descriptor.type,
          operands
        });
        i += check.length - 1;
        break;
      }
    }
    if (startTree === tree.length) {
      console.log('Invalid instruction encountered at token: ', JSON.stringify(tokens[i]));
    }
  }

  return tree;
};

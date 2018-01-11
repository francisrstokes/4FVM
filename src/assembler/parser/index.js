const Result = require('folktale/result');
const preprocessTokens = require('./preprocess-tokens');
const validPatterns = require('./valid-patterns');
const { flip, nth, prop, map, compose, lensPath, lensProp, over, chain } = require('ramda');

// matchPattern :: [Token] -> [TokenType] -> Int -> Boolean
const matchPattern = (checkTokens) => (validTokens, ci) => {
  return validTokens.includes(checkTokens[ci].type);
};

// data Operand = { Value | Type }
// populateOperands :: [Token] -> Operand -> Operand
const populateOperands = (checkTokens) => (operand) => {
  const getTokenValue = compose(prop('value'), flip(nth)(checkTokens));
  return over(lensProp('value'), getTokenValue, operand);
};

// parse :: Result String [Token] -> Result Error [Instruction]
module.exports = chain((_tokens) => {
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
        const populateDescriptor = over(lensPath(['operands']), map(populateOperands(checkTokens)));
        tree.push(populateDescriptor(descriptor));
        i += check.length - 1;
        break;
      }
    }
    if (startTree === tree.length) {
      return Result.Error(`Parser Error: Invalid instruction encountered at token: ${JSON.stringify(tokens[i])}`);
    }
  }

  return Result.Ok(tree);
});

const tt = require('../token-types');
const { clamp16 } = require('../util');
const { compose, filter, map, merge } = require('ramda');
const pointers = [tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D];

// resolveNumbers :: Token -> Token
const resolveNumbers = (token) => {
  let value = token.value;
  if (token.type === tt.HEX_VALUE) {

    value = clamp16(parseInt(token.value, 16));
  } else if (token.type === tt.DEC_VALUE) {
    value = clamp16(parseInt(token.value));
  }
  return merge(token, { value });
};

// resolvePointers :: Token -> Token
const resolvePointers = (token) => {
  let value = token.value;
  if (pointers.includes(token.type)) {
    value = token.value[1];
  }
  return merge(token, { value });
};

// filterTokens :: Token -> Boolean
const filterTokens = (token) => !([tt.WHITESPACE, tt.NEWLINE].includes(token.type));

// preprocessTokens :: [Tokens] -> [Tokens]
module.exports = compose(
  map(compose(resolveNumbers, resolvePointers)),
  filter(filterTokens)
);

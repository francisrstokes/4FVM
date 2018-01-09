const tt = require('../token-types');
const { clamp16 } = require('../util');
const {
  mapTransducer,
  filterTransducer,
  reduce,
  compose,
  concat
} = require('simple-transduce');

const resolveNumbers = mapTransducer((token) => {
  let value = token.value;
  if (token.type === tt.HEX_VALUE) {
    value = clamp16(parseInt(token.value, 16));
  } else if (token.type === tt.DEC_VALUE) {
    value = clamp16(parseInt(token.value));
  }
  return Object.assign({}, token, { value });
});

const resolvePointers = mapTransducer((token) => {
  const pointers = [
    tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D
  ];
  let value = token.value;
  if (pointers.includes(token.type)) {
    value = token.value[1];
  }
  return Object.assign({}, token, { value });
});

const filterTokens = filterTransducer((token) =>
  !([tt.WHITESPACE, tt.NEWLINE].includes(token.type))
);

const preprocessTokens = compose(
  filterTokens,
  resolveNumbers,
  resolvePointers
);

module.exports = (tokens) =>
  reduce(preprocessTokens(concat), [], tokens);
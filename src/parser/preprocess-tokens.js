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

const resolveAddressesAndPointers = mapTransducer((token) => {
  const addressesAndPointers = [
    tt.ADDR_A, tt.ADDR_B, tt.ADDR_C, tt.ADDR_D,
    tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D
  ];
  let value = token.value;
  if (addressesAndPointers.includes(token.type)) {
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
  resolveAddressesAndPointers
);

module.exports = (tokens) =>
  reduce(preprocessTokens(concat), [], tokens);
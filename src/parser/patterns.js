const opcodes = require('../opcodes');
const opcodeObject = opcodes.reduce((acc, cur) => {
  acc[cur] = cur;
  return acc;
}, {});

module.exports = Object.assign(
  { 'LABEL': 'LABEL' },
  opcodeObject
);

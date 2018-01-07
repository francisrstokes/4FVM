const opcodes = require('../opcodes');
const { arrToObjKeys } = require('../util');

module.exports = Object.assign(
  { 'LABEL': 'LABEL' },
  arrToObjKeys(opcodes)
);

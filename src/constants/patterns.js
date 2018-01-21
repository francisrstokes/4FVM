const opcodes = require('./opcodes');
const { arrToObjKeys } = require('../util');

module.exports = Object.assign(
  { 'LABEL': 'LABEL' },
  { 'DATA_START': 'DATA_START' },
  { 'DATA_END': 'DATA_END' },
  { 'ENTRY_POINT': 'ENTRY_POINT' },
  arrToObjKeys(opcodes)
);

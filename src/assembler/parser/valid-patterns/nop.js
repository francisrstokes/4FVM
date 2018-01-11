const tt = require('../../token-types');
const patterns = require('../../../constants/patterns');

module.exports = [
  [
    [[tt.NOP]],
    {
      type: patterns.NOP,
      operands: []
    }
  ]
];

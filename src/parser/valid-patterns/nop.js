const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [[tt.NOP]],
    {
      type: patterns.NOP,
      operands: []
    }
  ]
];

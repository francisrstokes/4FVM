const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [[tt.LABEL]],
    {
      type: patterns.LABEL,
      operands: [0]
    }
  ]
];

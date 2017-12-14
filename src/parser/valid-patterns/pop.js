const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.POP],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.POP_REG,
      operands: [1]
    }
  ]
];

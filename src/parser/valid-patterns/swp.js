const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.SWP],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.SWP_NUM,
      operands: [1, 3]
    }
  ]
];

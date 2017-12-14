const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.AND],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.AND_REG_NUM,
      operands: [1, 3]
    }
  ],
  [
    [
      [tt.AND],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.AND_REG_REG,
      operands: [1, 3]
    }
  ],
  [
    [
      [tt.AND],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D]
    ],
    {
      type: patterns.AND_REG_REGPTR,
      operands: [1, 3]
    }
  ]
];
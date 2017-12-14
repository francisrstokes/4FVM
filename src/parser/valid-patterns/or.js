const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.OR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.OR_REG_NUM,
      operands: [1, 3]
    }
  ],
  [
    [
      [tt.OR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.OR_REG_REG,
      operands: [1, 3]
    }
  ],
  [
    [
      [tt.OR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D]
    ],
    {
      type: patterns.OR_REG_REGPTR,
      operands: [1, 3]
    }
  ]
];

const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.XOR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.XOR_REG_NUM,
      operXORs: [1, 3]
    }
  ],
  [
    [
      [tt.XOR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.XOR_REG_REG,
      operXORs: [1, 3]
    }
  ],
  [
    [
      [tt.XOR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D]
    ],
    {
      type: patterns.XOR_REG_REGPTR,
      operXORs: [1, 3]
    }
  ]
];

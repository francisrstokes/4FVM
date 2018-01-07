const tt = require('../../token-types');
const patterns = require('../patterns');
const ot = require('../../operand-types');

module.exports = [
  [
    [
      [tt.CMP],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.CMP_REG_NUM,
      operands: [
        [ot.REG, 1],
        [ot.NUM, 3]
      ]
    }
  ],
  [
    [
      [tt.CMP],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.CMP_REG_REG,
      operands: [
        [ot.REG, 1],
        [ot.REG, 3]
      ]
    }
  ],
  [
    [
      [tt.CMP],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D]
    ],
    {
      type: patterns.CMP_REG_PTR,
      operands: [
        [ot.REG, 1],
        [ot.PTR, 3]
      ]
    }
  ]
];

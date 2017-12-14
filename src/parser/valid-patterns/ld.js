const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.LD],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.LD_REG_NUM,
      operands: [1, 3]
    }
  ],
  [
    [
      [tt.LD],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.LD_REG_REG,
      operands: [1, 3]
    }
  ],
  [
    [
      [tt.LD],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D]
    ],
    {
      type: patterns.LD_REG_REGPTR,
      operands: [1, 3]
    }
  ],

  [
    [
      [tt.LD],
      [tt.HEX_VALUE, tt.DEC_VALUE],
      [tt.OPERAND_SEPARATOR],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.LD_ADDR_NUM,
      operands: [1, 3]
    }
  ],
  [
    [
      [tt.LD],
      [tt.HEX_VALUE, tt.DEC_VALUE],
      [tt.OPERAND_SEPARATOR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.LD_ADDR_REG,
      operands: [1, 3]
    }
  ],
  [
    [
      [tt.LD],
      [tt.HEX_VALUE, tt.DEC_VALUE],
      [tt.OPERAND_SEPARATOR],
      [tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D]
    ],
    {
      type: patterns.LD_ADDR_REGPTR,
      operands: [1, 3]
    }
  ],

  [
    [
      [tt.LD],
      [tt.ADDR_A, tt.ADDR_B, tt.ADDR_C, tt.ADDR_D],
      [tt.OPERAND_SEPARATOR],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.LD_REG_ADDR_NUM,
      operands: [1, 3]
    }
  ],
  [
    [
      [tt.LD],
      [tt.ADDR_A, tt.ADDR_B, tt.ADDR_C, tt.ADDR_D],
      [tt.OPERAND_SEPARATOR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.LD_REG_ADDR_REG,
      operands: [1, 3]
    }
  ],
  [
    [
      [tt.LD],
      [tt.ADDR_A, tt.ADDR_B, tt.ADDR_C, tt.ADDR_D],
      [tt.OPERAND_SEPARATOR],
      [tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D]
    ],
    {
      type: patterns.LD_REG_ADDR_REGPTR,
      operands: [1, 3]
    }
  ]
];

const tt = require('../../token-types');
const patterns = require('../patterns');
const ot = require('../../operand-types');

module.exports = [
  [
    [
      [tt.PSH],
      [tt.HEX_VALUE, tt.DEC_VALUE, tt.LABEL]
    ],
    {
      type: patterns.PSH_NUM,
      operands: [
        [ot.NUM, 1]
      ]
    }
  ],
  [
    [
      [tt.PSH],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.PSH_REG,
      operands: [
        [ot.REG, 1]
      ]
    }
  ],
  [
    [
      [tt.PSH],
      [tt.REG_PTR_A, tt.REG_PTR_B, tt.REG_PTR_C, tt.REG_PTR_D]
    ],
    {
      type: patterns.PSH_REG_PTR,
      operands: [
        [ot.REG, 1]
      ]
    }
  ]
];

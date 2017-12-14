const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.PSH],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.PSH_NUM,
      operands: [1]
    }
  ],
  [
    [
      [tt.PSH],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.PSH_REG,
      operands: [1]
    }
  ],
  [
    [
      [tt.PSH],
      [tt.REG_PTR_A, tt.REG_PTR_B, tt.REG_PTR_C, tt.REG_PTR_D]
    ],
    {
      type: patterns.PSH_REG_PTR,
      operands: [1]
    }
  ]
];

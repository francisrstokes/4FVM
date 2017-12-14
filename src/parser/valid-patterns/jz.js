const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.JZ],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.JZ_NUM,
      operands: [1]
    }
  ],
  [
    [
      [tt.JZ],
      [tt.ADDR_A, tt.ADDR_B, tt.ADDR_C, tt.ADDR_D]
    ],
    {
      type: patterns.JZ_REG_ADDR,
      operands: [1]
    }
  ]
];

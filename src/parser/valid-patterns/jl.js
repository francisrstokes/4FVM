const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.JL],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.JL_NUM,
      operands: [1]
    }
  ],
  [
    [
      [tt.JL],
      [tt.ADDR_A, tt.ADDR_B, tt.ADDR_C, tt.ADDR_D]
    ],
    {
      type: patterns.JL_REG_ADDR,
      operands: [1]
    }
  ]
];

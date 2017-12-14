const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.JG],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.JG_NUM,
      operands: [1]
    }
  ],
  [
    [
      [tt.JG],
      [tt.ADDR_A, tt.ADDR_B, tt.ADDR_C, tt.ADDR_D]
    ],
    {
      type: patterns.JG_REG_ADDR,
      operands: [1]
    }
  ]
];

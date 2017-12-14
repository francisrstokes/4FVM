const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.JEQ],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.JEQ_NUM,
      operands: [1]
    }
  ],
  [
    [
      [tt.JEQ],
      [tt.ADDR_A, tt.ADDR_B, tt.ADDR_C, tt.ADDR_D]
    ],
    {
      type: patterns.JEQ_REG_ADDR,
      operands: [1]
    }
  ]
];

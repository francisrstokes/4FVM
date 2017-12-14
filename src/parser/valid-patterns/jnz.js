const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.JNZ],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.JNZ_NUM,
      operands: [1]
    }
  ],
  [
    [
      [tt.JNZ],
      [tt.ADDR_A, tt.ADDR_B, tt.ADDR_C, tt.ADDR_D]
    ],
    {
      type: patterns.JNZ_REG_ADDR,
      operands: [1]
    }
  ]
];

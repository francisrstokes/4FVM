const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.JNE],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.JNE_NUM,
      operands: [1]
    }
  ],
  [
    [
      [tt.JNE],
      [tt.ADDR_A, tt.ADDR_B, tt.ADDR_C, tt.ADDR_D]
    ],
    {
      type: patterns.JNE_REG_ADDR,
      operands: [1]
    }
  ]
];

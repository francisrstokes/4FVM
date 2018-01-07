const tt = require('../../token-types');
const patterns = require('../patterns');
const ot = require('../../operand-types');

module.exports = [
  [
    [
      [tt.JNE],
      [tt.HEX_VALUE, tt.DEC_VALUE, tt.LABEL]
    ],
    {
      type: patterns.JNE_NUM,
      operands: [
        [ot.NUM, 1]
      ]
    }
  ],
  [
    [
      [tt.JNE],
      [tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D]
    ],
    {
      type: patterns.JNE_PTR,
      operands: [
        [ot.PTR, 1]
      ]
    }
  ]
];

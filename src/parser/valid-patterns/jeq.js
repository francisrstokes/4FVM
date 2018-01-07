const tt = require('../../token-types');
const patterns = require('../patterns');
const ot = require('../../operand-types');

module.exports = [
  [
    [
      [tt.JEQ],
      [tt.HEX_VALUE, tt.DEC_VALUE, tt.LABEL]
    ],
    {
      type: patterns.JEQ_NUM,
      operands: [
        [ot.NUM, 1]
      ]
    }
  ],
  [
    [
      [tt.JEQ],
      [tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D]
    ],
    {
      type: patterns.JEQ_PTR,
      operands: [
        [ot.PTR, 1]
      ]
    }
  ]
];

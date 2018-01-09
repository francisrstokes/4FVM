const tt = require('../../token-types');
const patterns = require('../patterns');
const ot = require('../../operand-types');

module.exports = [
  [
    [
      [tt.JL],
      [tt.HEX_VALUE, tt.DEC_VALUE, tt.LABEL]
    ],
    {
      type: patterns.JL_NUM,
      operands: [
        { type: ot.NUM, value: 1 }
      ]
    }
  ],
  [
    [
      [tt.JL],
      [tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D]
    ],
    {
      type: patterns.JL_PTR,
      operands: [
        { type: ot.REG, value: 1 }
      ]
    }
  ]
];

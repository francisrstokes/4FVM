const tt = require('../../token-types');
const patterns = require('../../../constants/patterns');
const ot = require('../../../constants/operand-types');

module.exports = [
  [
    [
      [tt.JEQ],
      [tt.HEX_VALUE, tt.DEC_VALUE, tt.LABEL]
    ],
    {
      type: patterns.JEQ_NUM,
      operands: [
        { type: ot.NUM, value: 1 }
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
        { type: ot.REG, value: 1 }
      ]
    }
  ]
];

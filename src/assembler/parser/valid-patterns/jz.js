const tt = require('../../token-types');
const patterns = require('../../../constants/patterns');
const ot = require('../../../constants/operand-types');

module.exports = [
  [
    [
      [tt.JZ],
      [tt.HEX_VALUE, tt.DEC_VALUE, tt.LABEL]
    ],
    {
      type: patterns.JZ_NUM,
      operands: [
        { type: ot.NUM, value: 1 }
      ]
    }
  ],
  [
    [
      [tt.JZ],
      [tt.PTR_A, tt.PTR_B, tt.PTR_C, tt.PTR_D]
    ],
    {
      type: patterns.JZ_PTR,
      operands: [
        { type: ot.REG, value: 1 }
      ]
    }
  ]
];

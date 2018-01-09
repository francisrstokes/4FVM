const tt = require('../../token-types');
const patterns = require('../patterns');
const ot = require('../../operand-types');

module.exports = [
  [
    [
      [tt.RSF],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.RSF_REG_NUM,
      operands: [
        { type: ot.REG, value: 1 },
        { type: ot.NUM, value: 3 }
      ]
    }
  ]
];

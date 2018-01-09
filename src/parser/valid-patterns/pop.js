const tt = require('../../token-types');
const patterns = require('../patterns');
const ot = require('../../operand-types');

module.exports = [
  [
    [
      [tt.POP],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.POP_REG,
      operands: [
        { type: ot.REG, value: 1 }
      ]
    }
  ]
];

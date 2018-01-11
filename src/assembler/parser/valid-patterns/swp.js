const tt = require('../../token-types');
const patterns = require('../../../constants/patterns');
const ot = require('../../../constants/operand-types');

module.exports = [
  [
    [
      [tt.SWP],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D],
      [tt.OPERAND_SEPARATOR],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.SWP,
      operands: [
        { type: ot.REG, value: 1 },
        { type: ot.REG, value: 3 }
      ]
    }
  ]
];

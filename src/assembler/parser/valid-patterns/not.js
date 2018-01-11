const tt = require('../../token-types');
const patterns = require('../../../constants/patterns');
const ot = require('../../../constants/operand-types');

module.exports = [
  [
    [
      [tt.NOT],
      [tt.REG_A, tt.REG_B, tt.REG_C, tt.REG_D]
    ],
    {
      type: patterns.NOT_REG,
      operands: [
        { type: ot.REG, value: 1 }
      ]
    }
  ]
];

const tt = require('../../token-types');
const patterns = require('../../../constants/patterns');
const ot = require('../../../constants/operand-types');

module.exports = [
  [
    [
      [tt.ENTRY_POINT],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.ENTRY_POINT,
      operands: [
        { type: ot.NUM, value: 1 }
      ]
    }
  ]
];

const tt = require('../../token-types');
const patterns = require('../../../constants/patterns');
const ot = require('../../../constants/operand-types');

module.exports = [
  [
    [
      [tt.INT],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.INT_NUM,
      operands: [
        { type: ot.NUM, value: 1 }
      ]
    }
  ]
];

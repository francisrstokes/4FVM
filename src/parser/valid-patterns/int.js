const tt = require('../../token-types');
const patterns = require('../patterns');
const ot = require('../../operand-types');

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

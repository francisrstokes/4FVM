const tt = require('../../token-types');
const patterns = require('../patterns');

module.exports = [
  [
    [
      [tt.INT],
      [tt.HEX_VALUE, tt.DEC_VALUE]
    ],
    {
      type: patterns.INT_NUM,
      operands: [1]
    }
  ]
];

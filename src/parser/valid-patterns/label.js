const tt = require('../../token-types');
const patterns = require('../patterns');
const ot = require('../../operand-types');

module.exports = [
  [
    [[tt.LABEL]],
    {
      type: patterns.LABEL,
      operands: [
        { type: ot.LABEL, value: 0 }
      ]
    }
  ]
];

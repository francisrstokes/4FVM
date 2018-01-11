const tt = require('../../token-types');
const patterns = require('../../../constants/patterns');
const ot = require('../../../constants/operand-types');

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

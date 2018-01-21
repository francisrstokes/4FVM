const tt = require('../../token-types');
const patterns = require('../../../constants/patterns');

module.exports = [
  [
    [[tt.DATA_END]],
    {
      type: patterns.DATA_END,
      operands: []
    }
  ]
];

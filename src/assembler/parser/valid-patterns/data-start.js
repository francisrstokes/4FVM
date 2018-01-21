const tt = require('../../token-types');
const patterns = require('../../../constants/patterns');

module.exports = [
  [
    [[tt.DATA_START]],
    {
      type: patterns.DATA_START,
      operands: []
    }
  ]
];

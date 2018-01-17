const opcodePairs = require('./opcode-pairs');
const { nth, map } = require('ramda');

module.exports = map(nth(0), opcodePairs);

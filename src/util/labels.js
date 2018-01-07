const { nth, compose, prop } = require('ramda');

const getLabelValue = compose(nth(1), nth(0), prop('operands'));

module.exports = { getLabelValue };

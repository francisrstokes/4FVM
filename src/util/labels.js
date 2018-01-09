const { nth, compose, prop } = require('ramda');

// getLabelValue :: Label -> String
const getLabelValue = compose(prop('value'), nth(0), prop('operands'));

module.exports = { getLabelValue };

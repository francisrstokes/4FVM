const {
  __,
  over,
  ifElse,
  compose,
  prop,
  map,
  identity,
  lensProp
} = require('ramda');
const { nativeToString, regexTest } = require('../util');

const operandsL = lensProp('operands');
const valueL = lensProp('value');

const replaceIfLabel = (lt) =>
  ifElse(
    compose(regexTest(/^[a-zA-Z_]+:$/), nativeToString, prop('value')),
    over(valueL, prop(__, lt)),
    identity
  );

module.exports = (lt) =>
  over(operandsL, map(replaceIfLabel(lt)));
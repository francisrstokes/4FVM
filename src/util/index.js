const { compose, map, curry, reduce, addIndex } = require('ramda');
const Maybe = require('folktale/maybe');

const clamp = (value, min, max) => (value < min)
? min
: (value > max)
  ? max
  : value;

const clamp16 = (value) => clamp(value, 0, 0xFFFF);

const property = curry((obj, prop) => obj[prop]);
const replace = curry((regex, replacer, str) => str.replace(regex, replacer));
const toUpperCase = (str) => str.toUpperCase();

const arrToObjKeys = reduce((acc, cur) => Object.assign({ [cur]: cur }, acc), {});

const indexOf = curry((item, array) => {
  return array.indexOf(item)
});
const maybeIndexOf = curry((item, array) => {
  const idx = indexOf(item, array);
  if (idx >= 0) return Maybe.Just(idx);
  return Maybe.Nothing();
});

const regexTest = curry((regex, s) => regex.test(s));

const isString = (x) => typeof x === 'string';
const indexedReduce = addIndex(reduce);

const nativeToString = (x) => x.toString();

const flatten = reduce((acc, cur) => [...acc, ...cur], []);
const achain = (fn) => compose(flatten, map(fn));

module.exports = {
  achain,
  clamp,
  clamp16,
  property,
  replace,
  toUpperCase,
  arrToObjKeys,
  regexTest,
  isString,
  nativeToString,
  indexOf,
  maybeIndexOf,
  indexedReduce
};

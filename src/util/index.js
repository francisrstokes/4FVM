const clamp = (value, min, max) => (value < min)
? min
: (value > max)
  ? max
  : value;

const clamp16 = (value) => clamp(value, 0, 0xFFFF);

const curry = (fn) => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...argsNext) => curried(...args, ...argsNext);
  };
  return curried;
};
const property = curry((obj, prop) => obj[prop]);
const pipe = (fn1, ...functions) =>
  (...args) =>
    functions.reduce((acc, fn) => fn(acc), fn1(...args));
const compose = (...functions) => pipe(...functions.reverse());
const replace = curry((regex, replacer, str) => str.replace(regex, replacer));
const toUpperCase = (str) => str.toUpperCase();

module.exports = {
  clamp,
  clamp16,
  curry,
  property,
  pipe,
  compose,
  replace,
  toUpperCase
};

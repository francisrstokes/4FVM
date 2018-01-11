const Result = require('folktale/result');
const Maybe = require('folktale/maybe');
const { prop, compose, map, curry, reduce, addIndex, chain, curryN } = require('ramda');

// clamp :: Int -> Int -> Int -> Int
const clamp = curry((min, max, value) =>
  (value < min)
    ? min
    : (value > max)
      ? max
      : value
);

// clamp16 :: Int -> Int
const clamp16 = clamp(0, 0xFFFF);

// arrToObjKeys :: [String] -> Dict String String
const arrToObjKeys = reduce((acc, cur) => Object.assign({ [cur]: cur }, acc), {});

// regexTest :: Regex -> String -> Boolean
const regexTest = curry((regex, s) => regex.test(s));

// indexedReduce :: ((a, b) -> a) -> a -> [b] -> a
const indexedReduce = addIndex(reduce);

// nativeToString :: a -> String
const nativeToString = (x) => x.toString();

// flatten :: [[a]] -> [a]
const flatten = reduce((acc, cur) => [...acc, ...cur], []);

// achain :: [[a]] -> [b]
const achain = (fn) => compose(flatten, map(fn));

// indexOf :: [a] -> a -> Int
const indexOf = curry((xs, x) => xs.indexOf(x));

// tryTo :: (b -> x) -> (b -> y) -> (a -> b) -> a -> (x | y)
const tryTo = curry((rej, res, f, x) => {
  try {
    return res(f(x));
  } catch (ex) {
    return rej(ex);
  }
});

// toBuffer :: [Uint16] -> Result Error (Buffer Int)
const toBuffer = compose(tryTo(Result.Error, Result.Ok, Buffer.from), prop('buffer'));

// toUint16 :: [Int] -> [Uint16]
const toUint16 = (arr) => new Uint16Array(arr);

// result :: (e -> b) -> (a -> c) -> Result e a -> (b | c)
const result = curry((errFn, successFn, M) => M.fold(errFn, successFn, M));

// result :: (_ -> b) -> (a -> c) -> Maybe a -> (b | c)
const maybe = curry((errFn, successFn, M) => M.fold(errFn, successFn, M));

// effect :: (a -> b) -> M a -> M a
const effect = curry((fn, x) => map(() => x, fn(x)))

// chainEffect :: M a -> (a -> M b) -> M a
const chainEffect = compose(chain, effect);

// maybePredicate :: (a -> Boolean) -> a -> Maybe a
const maybePredicate = (predicate) => (thing) =>
  (predicate(thing))
    ? Maybe.of(thing)
    : Maybe.Nothing();

// maybeString :: a -> Maybe a
const maybeString = maybePredicate((x) => (typeof x === 'string'));

// maybeNumber :: a -> Maybe a
const maybeNumber = maybePredicate((x) => (typeof x === 'number'));

// maybeBoolean :: a -> Maybe a
const maybeBoolean = maybePredicate((x) => (typeof x === 'boolean'));

// maybefy :: a -> M a
const maybefy = maybePredicate((x) => (typeof x !== 'undefined'));


module.exports = {
  achain,
  flatten,
  clamp,
  clamp16,
  arrToObjKeys,
  regexTest,
  nativeToString,
  indexedReduce,
  indexOf,
  toUint16,
  toBuffer,
  result,
  effect,
  chainEffect,
  maybe,
  maybefy,
  maybeString,
  maybeNumber,
  maybeBoolean,
  tryTo
};

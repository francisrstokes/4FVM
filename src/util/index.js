const Future = require('fluture');
const { prop, compose, map, curry, reduce, addIndex } = require('ramda');

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

// toBuffer :: [Uint16] -> Future Error Buffer Int
const toBuffer = compose(Future.encase(Buffer.from), prop('buffer'));

// toUint16 :: [Int] -> [Uint16]
const toUint16 = (arr) => new Uint16Array(arr);

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
  toBuffer
};

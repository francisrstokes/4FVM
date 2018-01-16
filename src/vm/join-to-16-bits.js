const { map, last, take, length, compose } = require('ramda');
const { indexedReduce } = require('../util');

// arrayFrom :: ArrayLike a -> [a]
const arrayFrom = (x) => Array.from(x);

// bufferJoinTo16Bits :: Buffer Int -> [Int]
const bufferJoinTo16Bits = compose(
  indexedReduce((acc, n, i) => {
    if (i % 2 === 0) {
      return [...acc, n];
    }
    const highPart = n << 8;
    return [...take(length(acc) - 1, acc), last(acc) | highPart];
  }, []),
  arrayFrom
);

// joinTo16Bits :: Result String Buffer Int -> Result String [Int]
module.exports = map(bufferJoinTo16Bits);
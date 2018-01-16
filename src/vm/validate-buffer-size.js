const Result = require('folktale/result');
const { length, ifElse, compose, equals, modulo, __ } = require('ramda');

const isEven = compose(equals(0), modulo(__, 2));

// validateBufferSize :: Buffer Int -> Result String Buffer Int
module.exports = ifElse(
  compose(isEven, length),
  Result.Ok,
  () => Result.Error('Validate Buffer Size: Non-sane number of bytes found in program')
);
const { reduce, take, zip, apply, equals, map, compose, ifElse, length } = require('ramda');
const Result = require('folktale/result');
const HEADER = require('../constants/header');
const { chainEffect } = require('../util');

// allTrue :: [Boolean] -> Boolean
const allTrue = reduce((acc, cur) => acc && cur, true);

// pairEqual :: [a, a] -> Boolean
const pairEquals = apply(equals);

// validateHeader :: Result String [Int] -> Result String [Int]
module.exports = chainEffect(ifElse(
  compose(allTrue, map(pairEquals), zip(HEADER), take(length(HEADER))),
  Result.Ok,
  () => Result.Error('Validate Header: Invalid header')
));

const yargs = require('yargs').argv;
const { maybefy, maybeString, maybeNumber, maybeBoolean } = require('.');
const { prop, compose, chain, __ } = require('ramda');

// fromTypedArgFn :: (a -> Maybe a) -> (String -> Maybe a)
const fromTypedArgFn = (fn) => compose(chain(fn), maybefy, prop(__, yargs));

// getStringArg :: String -> Maybe String
const getStringArg = fromTypedArgFn(maybeString);

// getNumberArg :: String -> Maybe Number
const getNumberArg = fromTypedArgFn(maybeNumber);

// getBooleanArg :: String -> Maybe Boolean
const getBooleanArg = fromTypedArgFn(maybeBoolean);

module.exports = {
  getStringArg,
  getBooleanArg,
  getNumberArg
};

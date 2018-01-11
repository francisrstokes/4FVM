const Future = require('fluture');
const { getStringArg } = require('../util/args');
const { maybe } = require('../util');
const { compose } = require('ramda');

// getFilename :: String -> Future Error String
module.exports = (type) => {
  return compose(
    maybe(
      () => Future.reject(`No ${type} file specified. (use --${type}=<filename>)`),
      Future.of
    ),
    getStringArg
  )(type);
}
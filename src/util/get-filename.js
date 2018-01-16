const Future = require('fluture');
const { getStringArg } = require('./args');
const { maybe } = require('./index');
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
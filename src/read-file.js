const Future = require('fluture');
const { readFile } = require('fs');
const { curry } = require('ramda');

// readFile :: String -> String -> Future Error String
module.exports = curry((encoding, filename) =>
  Future.node(done => readFile(filename, { encoding }, done)));

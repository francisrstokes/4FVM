const Future = require('fluture');
const { readFile } = require('fs');
const { curry } = require('ramda');

// readFile :: Object -> String -> Future Error String
module.exports = curry((options, filename) =>
  Future.node(done => readFile(filename, options, done)));

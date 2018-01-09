const Future = require('fluture');
const { writeFile } = require('fs');
const { curry } = require('ramda');

// writeBinary :: String -> (Buffer UInt8) -> Future (Error null)
module.exports = curry((filename, buffer) =>
  Future.node(done => writeFile(filename, buffer, done)));

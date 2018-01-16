const Future = require('fluture');
const { writeFile } = require('fs');
const getFilename = require('../util/get-filename');

// writeBinary :: Buffer UInt8 -> Future (Error String)
module.exports = buffer => getFilename('output')
  .chain(filename => Future((reject, resolve) => {
    writeFile(filename, buffer, (err) => (err) ? reject(err) : resolve(filename))
  }));
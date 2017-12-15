const { promisify } = require('util');
const readdirAsync = promisify(require('fs').readdir);
const { pipe, replace, toUpperCase } = require('../../util');

const filterFiles = filename => filename !== 'index.js' && (/\.js$/).test(filename);
const filenameToOpcode = pipe(replace(/\.js/g, ''), replace(/-/g, '_'), toUpperCase);

const createOpcodesObject = (opcodes, filename) => {
  const opcodeName = filenameToOpcode(filename);
  opcodes[opcodeName] = require(`./${filename}`); //eslint-disable-line
  return opcodes;
}

const loadOpcodeFunctions = (files) =>
  files
    .filter(filterFiles)
    .reduce(createOpcodesObject, {});

module.exports = () =>
  readdirAsync('./src/encode/opcode-functions/')
  .then(loadOpcodeFunctions);
const Future = require('fluture');
const { curry, prop, compose } = require('ramda');

const tokenise = require('./tokeniser');
const parse = require('./parser');
const encode = require('./encode');
const validateAST = require('./validate-ast');

const { writeFile } = require('fs');
// const src = `
// `;

const src = `
myprogram:
  LD 0xAF, place:
  NOP
  JNZ place:
  LD 0xAD42, A
  LD A, 20
  LD $A, $B
  LD $B, 42
place:
  ADD B, 0x91
  ADD A, $B
  CMP A, B
  PSH A
  POP B
  SWP A, B
`;

const writeBinary = curry((filename, buffer) =>
  Future.node(done => writeFile(filename, buffer, done)));

const toBuffer = compose(Buffer.from, prop('buffer'));

const program = Future
  .of(src)
  .chain(tokenise)
  .chain(parse)
  .chain(validateAST)
  .chain(encode)
  .map(toBuffer)
  .chain(writeBinary('test.bin'));

program.fork(
  (err) => {
    console.log(`4FVM Error: ${err}`)
  },
  (x) => {
    console.log(JSON.stringify(x, null, '  '));
    debugger;
  }
);

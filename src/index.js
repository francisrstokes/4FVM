const Future = require('fluture');
const tokenise = require('./tokeniser');
const parse = require('./parser');
const encode = require('./encode');
const validateAST = require('./validate-ast');
const writeBinary = require('./write-bin');
const { toBuffer } = require('./util');

const onErr = (err) => console.log(`4FVM Error: ${err}`);

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


const program = Future
  .of(src)
  .chain(tokenise)
  .chain(parse)
  .chain(validateAST)
  .chain(encode)
  .chain(toBuffer)
  .chain(writeBinary('test.bin'))
  .map(() => 'Success')

program.fork(onErr, console.log);

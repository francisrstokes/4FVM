const Future = require('fluture');
const { compose } = require('ramda');

const tokenise = require('./tokeniser');
const parse = require('./parser');
const encode = require('./encode');
const validateAST = require('./validate-ast');

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

const encodeSrc = compose(encode, validateAST, parse, tokenise);

const program = Future
  .of(src)
  .map(encodeSrc);

program.fork(
  (err) => {
    console.log(`4FVM Error: ${err}`)
  },
  (x) => {
    console.log(x);
    debugger;
  }
);

// (async () => {
//   const tokens = tokenise(program);
//   const parseTree = parse(tokens);
//   const encoded = await encode(parseTree);
// })();

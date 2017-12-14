const tokenise = require('./tokeniser');
const parse = require('./parser');
const program = `
myprogram:
  NOP
  LD 0xAD42, A
  LD A, 20
  LD &A, $B
  LD &B, 42
  ADD B, 0x91
  ADD A, $B
  CMP A, B
`;

const tokens = tokenise(program);
const parseTree = parse(tokens);
console.log(JSON.stringify(parseTree, null, '  '));

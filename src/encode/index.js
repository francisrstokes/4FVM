const opcodes = require('../opcodes');
const getOpcodeFunctions = require('./opcode-functions');

module.exports = async (ast) => {
  const opcodeFns = await getOpcodeFunctions();
  console.log(opcodeFns)
  ast.map(instruction => {
    const opcodeValue = opcodes.indexOf(instruction);
  })
}

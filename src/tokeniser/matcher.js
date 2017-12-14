const tokenTypes = require('../token-types');

module.exports = [
  // Whitespace and Newlines
  [' ', tokenTypes.WHITESPACE],
  ['\t', tokenTypes.WHITESPACE],
  [/\n$/, tokenTypes.NEWLINE],

  // Numbers
  ['0x', [
    [/[0-9A-F]{1,4}$/, tokenTypes.HEX_VALUE]
  ]],
  [/[0-9]+$/, tokenTypes.DEC_VALUE],

  [/[a-zA-Z0-9]+$/, [
    [':', tokenTypes.LABEL]
  ]],

  // Operand separator
  [',', tokenTypes.OPERAND_SEPARATOR],

  ['LD', tokenTypes.LD],
  ['ADD', tokenTypes.ADD],
  ['SUB', tokenTypes.SUB],
  ['NOP', tokenTypes.NOP],
  ['CMP', tokenTypes.CMP],

  ['AND', tokenTypes.AND],
  ['OR', tokenTypes.OR],
  ['XOR', tokenTypes.XOR],
  ['NOT', tokenTypes.NOT],
  ['LSF', tokenTypes.LSF],
  ['RSF', tokenTypes.RSF],
  ['JZ', tokenTypes.JZ],
  ['JNZ', tokenTypes.JNZ],
  ['JEQ', tokenTypes.JEQ],
  ['JNE', tokenTypes.JNE],
  ['JG', tokenTypes.JG],
  ['JL', tokenTypes.JL],
  ['PSH', tokenTypes.PSH],
  ['POP', tokenTypes.POP],
  ['SWP', tokenTypes.SWP],

  ['A', tokenTypes.REG_A],
  ['B', tokenTypes.REG_B],
  ['C', tokenTypes.CMP],
  ['D', tokenTypes.REG_D],

  ['$A', tokenTypes.PTR_A],
  ['$B', tokenTypes.PTR_B],
  ['$C', tokenTypes.PTR_C],
  ['$D', tokenTypes.PTR_D],

  ['&', [
    // ['0x', [
    //   [/[0-9A-F]{1,4}$/, tokenTypes.ADDR_HEX]
    // ]],
    // [/[0-9]+$/, tokenTypes.ADDR_DEC],
    ['A', tokenTypes.ADDR_A],
    ['B', tokenTypes.ADDR_B],
    ['C', tokenTypes.ADDR_C],
    ['D', tokenTypes.ADDR_D]
  ]]
];

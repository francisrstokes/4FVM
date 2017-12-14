module.exports = {
  // No operation
  'NOP': 'nop',

  // Labels
  'LABEL': 'label',

  // Load operations
  'LD_REG_NUM': 'ld_reg_num',
  'LD_ADDR_NUM': 'ld_addr_num',
  'LD_REG_ADDR_NUM': 'ld_reg_addr_num',
  'LD_REG_REG': 'ld_reg_reg',
  'LD_ADDR_REG': 'ld_addr_reg',
  'LD_REG_ADDR_REG': 'ld_reg_addr_reg',
  'LD_REG_REGPTR': 'ld_reg_regptr',
  'LD_ADDR_REGPTR': 'ld_addr_regptr',
  'LD_REG_ADDR_REGPTR': 'ld_reg_addr_regptr',

  // Add operations
  'ADD_REG_NUM': 'add_reg_num',
  'ADD_REG_REG': 'add_reg_reg',
  'ADD_REG_REGPTR': 'add_reg_regptr',

  // Cmp options
  'CMP_REG_NUM': 'cmp_reg_num',
  'CMP_REG_REG': 'cmp_reg_reg',
  'CMP_REG_REGPTR': 'cmp_reg_regptr',

  // Sub operations
  'SUB_REG_NUM': 'sub_reg_num',
  'SUB_REG_REG': 'sub_reg_reg',
  'SUB_REG_REGPTR': 'sub_reg_regptr',

  // And operations
  'AND_REG_NUM': 'and_reg_num',
  'AND_REG_REG': 'and_reg_reg',
  'AND_REG_REGPTR': 'and_reg_regptr',

  // Or operations
  'OR_REG_NUM': 'or_reg_num',
  'OR_REG_REG': 'or_reg_reg',
  'OR_REG_REGPTR': 'or_reg_regptr',

  // Xor operations
  'XOR_REG_NUM': 'xor_reg_num',
  'XOR_REG_REG': 'xor_reg_reg',
  'XOR_REG_REGPTR': 'xor_reg_regptr',

  // Not operations
  'NOT_REG_NUM': 'not_reg_num',
  'NOT_REG_REG': 'not_reg_reg',
  'NOT_REG_REGPTR': 'not_reg_regptr',

  // Bit shift
  'LSF_REG_NUM': 'lsf_reg_num',
  'RSF_REG_NUM': 'rsf_reg_num',

  // Jumps
  'JZ_NUM': 'jz_num',
  'JZ_REG_ADD': 'jz_reg_add',
  'JNZ_NUM': 'jnz_num',
  'JNZ_REG_ADD': 'jnz_reg_add',
  'JEQ_NUM': 'jeq_num',
  'JEQ_REG_ADD': 'jeq_reg_add',
  'JNE_NUM': 'jne_num',
  'JNE_REG_ADD': 'jne_reg_add',
  'JG_NUM': 'jg_num',
  'JG_REG_ADD': 'jg_reg_add',
  'JL_NUM': 'jl_num',
  'JL_REG_ADD': 'jl_reg_add',


  // Push
  'PSH_NUM': 'psh_num',
  'PSH_REG': 'psh_reg',
  'PSH_REG_PTR': 'psh_reg_ptr',

  // Pop
  'POP_REG': 'pop_reg',

  // Interupt
  'INT_NUM': 'int_num',

  // Swap
  'SWP': 'swp'
};

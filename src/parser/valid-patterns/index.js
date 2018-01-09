/* eslint-disable global-require */
module.exports = [
  ...require('./add'),
  ...require('./cmp'),
  ...require('./jeq'),
  ...require('./jl'),
  ...require('./jnz'),
  ...require('./label'),
  ...require('./lsf'),
  ...require('./not'),
  ...require('./pop'),
  ...require('./rsf'),
  ...require('./swp'),
  ...require('./and'),
  ...require('./int'),
  ...require('./jg'),
  ...require('./jne'),
  ...require('./jz'),
  ...require('./ld'),
  ...require('./nop'),
  ...require('./or'),
  ...require('./psh'),
  ...require('./sub')
];
/* eslint-enable global-require */

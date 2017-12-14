const add = require('./add');
const cmp = require('./cmp');
const jeq = require('./jeq');
const jl = require('./jl');
const jnz = require('./jnz');
const label = require('./label');
const lsf = require('./lsf');
const not = require('./not');
const pop = require('./pop');
const rsf = require('./rsf');
const swp = require('./swp');
const and = require('./and');
const int = require('./int');
const jg = require('./jg');
const jne = require('./jne');
const jz = require('./jz');
const ld = require('./ld');
const nop = require('./nop');
const or = require('./or');
const psh = require('./psh');
const sub = require('./sub');

module.exports = [
  ...add,
  ...cmp,
  ...jeq,
  ...jl,
  ...jnz,
  ...label,
  ...lsf,
  ...not,
  ...pop,
  ...rsf,
  ...swp,
  ...and,
  ...int,
  ...jg,
  ...jne,
  ...jz,
  ...ld,
  ...nop,
  ...or,
  ...psh,
  ...sub
];

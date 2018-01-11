#!/usr/bin/env node

const tokenise = require('./tokeniser');
const parse = require('./parser');
const encode = require('./encode');
const validateAST = require('./validate-ast');
const getFilename = require('./get-filename');
const readFile = require('../read-file');
const writeBinary = require('./write-bin');
const { toBuffer } = require('../util');

const onErr = (err) => console.log(`4FVM: ${err}`);

const program = getFilename('input')
  .chain(readFile('utf8'))
  .chain(tokenise)
  .chain(parse)
  .chain(validateAST)
  .chain(encode)
  .chain(toBuffer)
  .chain(writeBinary)
  .map((outfile) => `Sucessfully wrote ${outfile}.`);

program.fork(onErr, console.log);

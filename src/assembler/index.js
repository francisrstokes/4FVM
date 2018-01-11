#!/usr/bin/env node

const Future = require('fluture');
const tokenise = require('./tokeniser');
const parse = require('./parser');
const encode = require('./encode');
const validateAST = require('./validate-ast');
const getFilename = require('./get-filename');
const readFile = require('../read-file');
const writeBinary = require('./write-bin');
const { toBuffer, result } = require('../util');
const { chain } = require('ramda');

const onErr = (err) => console.log(`4FVM: ${err}`);

const program = getFilename('input')
  .chain(readFile('utf8'))
  .map(tokenise)
  .map(parse)
  .map(validateAST)
  .map(encode)
  .map(chain(toBuffer))
  .chain(result(Future.reject, Future.of))
  .chain(writeBinary)
  .map((outfile) => `Sucessfully wrote ${outfile}.`);

program.fork(onErr, console.log);

#!/usr/bin/env node

const Future = require('fluture');
const getFilename = require('../util/get-filename');
const readFile = require('../util/read-file');
const { result, toUint16 } = require('../util');

const opcodes = require('../constants/opcodes');
const validateHeader = require('./validate-header');
const validateBufferSize = require('./validate-buffer-size');
const joinTo16Bits = require('./join-to-16-bits');

const onErr = (err) => console.log(`4FVM: ${err}`);

const program = getFilename('input')
  .chain(readFile({}))
  .map(validateBufferSize)
  .map(joinTo16Bits)
  .map(validateHeader)
  .chain(result(Future.reject, Future.of))
  // .map(map(x => {
  //   const decoded = nth(x, opcodes);
  //   console.log(decoded);
  //   return x;
  // }));

program.fork(onErr, console.log);

// Options:
// --memory_size=65536 :: sets the memory size
// --input=<some bin>
//

// data MachineState = { memory, registers }
// stepMachine :: MachineState m1 r1 -> MachineState m2 r2
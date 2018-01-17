#!/usr/bin/env node

const Future = require('fluture');
const getFilename = require('../util/get-filename');
const readFile = require('../util/read-file');
const { result } = require('../util');
const { findIndex, map, nth, compose, equals, chain } = require('ramda');

const opcodePairs = require('../constants/opcode-pairs');

const opcodes = require('../constants/opcodes');
const validateHeader = require('./validate-header');
const validateBufferSize = require('./validate-buffer-size');
const joinTo16Bits = require('./join-to-16-bits');
const createMachineState = require('./create-machine-state');

const onErr = (err) => console.log(`4FVM: ${err}`);

const program = getFilename('input')
  .chain(readFile({}))
  .map(validateBufferSize)
  .map(joinTo16Bits)
  .map(validateHeader)
  .map(map(createMachineState))
  .map(x => {
    debugger;
  })
  .chain(result(Future.reject, Future.of))

program.fork(onErr, console.log);

// Options:
// --memory_size=65536 :: sets the memory size
// --input=<some bin>
//

// data MachineState = { memory, registers }
// stepMachine :: MachineState m1 r1 -> MachineState m2 r2
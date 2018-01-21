const Result = require('folktale/result');

const patterns = require('../../constants/patterns');
const { chainEffect } = require('../../util');
const { getLabelValue } = require('../../util/labels');
const {
  reduce,
  reduced,
  compose,
  contains,
  filter,
  equals,
  prop,
  ifElse,
  length
 } = require('ramda');


// lengthIs1 :: [a] -> Boolean
const lengthIs1 = compose(equals(1), length);

// isPattern :: Instruction -> Boolean
const isPattern = (pattern) => compose(equals(pattern), prop('type'));

// Using chainEffect to decorate the check functions. This allows writing checks that take a
// (Result Error [Tokens]), return a (Result Error a) in case something goes wrong, but return
// the same (Result Error [Tokens]) if things are OK, instead of whatever intermediate junk they built
// up in order to perform the check. This way validations can be composed.

// sequentialLabelCheck :: (Result String [Instruction]) -> (Result String [Instruction])
const sequentialLabelCheck = chainEffect(
  reduce((prev, next) => {
    const pToken = prev.matchWith({ Ok: (x) => x.value });
    if (pToken.type === patterns.LABEL && next.type === patterns.LABEL) {
      return reduced(Result.Error(`Validation Error: Program cannot contain sequential labels. Found @ label [${getLabelValue(pToken)}]`));
    }
    return Result.Ok(next);
  }, Result.Ok({ type: null }))
);

// sameLabelCheck :: (Result String [Instruction]) -> (Result String [Instruction])
const sameLabelCheck = chainEffect(
  reduce((rAcc, token) => {
    const acc = rAcc.matchWith({ Ok: x => x.value });
    if (token.type === patterns.LABEL) {
      const labelValue = getLabelValue(token);
      if (contains(labelValue, acc)) {
        return reduced(Result.Error(`Validation Error: Program cannot contain duplicate labels. Found @ [${labelValue}]`));
      }
      return Result.Ok([...acc, labelValue]);
    }
    return rAcc;
  }, Result.Ok([]))
);

// singleEntryPointCheck :: (Result String [Instruction]) -> (Result String [Instruction])
const singleEntryPointCheck = chainEffect(
  ifElse(
    compose(lengthIs1, filter(isPattern(patterns.ENTRY_POINT))),
    Result.Ok,
    () => Result.Error('Validation Error: Program must contain one and only one only entry point directive')
  ));

// hasDataStart :: (Result String [Instruction]) -> (Result String [Instruction])
const hasDataStart = chainEffect(
  ifElse(
    compose(lengthIs1, filter(isPattern(patterns.DATA_START))),
    Result.Ok,
    () => Result.Error('Validation Error: Program must contain one and only one only data start directive')
  ));

// hasDataEnd :: (Result String [Instruction]) -> (Result String [Instruction])
const hasDataEnd = chainEffect(
  ifElse(
    compose(lengthIs1, filter(isPattern(patterns.DATA_END))),
    Result.Ok,
    () => Result.Error('Validation Error: Program must contain one and only one only data end directive')
  ));

// hasTextSection :: (Result String [Instruction]) -> (Result String [Instruction])
const hasTextSection = chainEffect(
  ifElse(
    compose(lengthIs1, filter(isPattern(patterns.TEXT))),
    Result.Ok,
    () => Result.Error('Validation Error: Program must contain one and only one only text directive')
  ));


// validateAST :: Result String [Instruction] :: Result String [Instruction]
module.exports = compose(
  sameLabelCheck,
  sequentialLabelCheck,
  singleEntryPointCheck,
  hasDataStart,
  hasDataEnd,
  hasTextSection
);

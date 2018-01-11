const Future = require('fluture');
const Result = require('folktale/result');

const patterns = require('../constants/patterns');
const { result, chainEffect } = require('../util');
const { getLabelValue } = require('../util/labels');
const { reduce, reduced, compose, contains } = require('ramda');

// Using chainEffect to decorate the check functions. This allows writing checks that take a
// (Result Error [Tokens]), return a (Result Error a) in case something goes wrong, but return
// the same (Result Error [Tokens]) if things are OK, instead of whatever intermediate junk they built
// up in order to perform the check. This way validations can be composed.

// sequentialLabelCheck :: (Result String [Token]) -> (Result String [Token])
const sequentialLabelCheck = chainEffect(
  reduce((prev, next) => {
    const pToken = prev.matchWith({ Ok: (x) => x.value });
    if (pToken.type === patterns.LABEL && next.type === patterns.LABEL) {
      return reduced(Result.Error(`Validation Error: Program cannot contain sequential labels. Found @ label [${getLabelValue(pToken)}]`));
    }
    return Result.Ok(next);
  }, Result.Ok({ type: null }))
);

// sameLabelCheck :: (Result String [Token]) -> (Result String [Token])
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

const validations = compose(sameLabelCheck, sequentialLabelCheck);

module.exports = compose(
  result(Future.reject, Future.of),
  validations,
  Result.Ok
);

const Future = require('fluture');
const Result = require('folktale/result');

const patterns = require('./parser/patterns');
const { mFold } = require('./util');
const { getLabelValue } = require('./util/labels');
const { reduce, reduced, compose, contains } = require('ramda');

// resultWrapper :: ([Token] -> Result String null) -> ((Result String [Token]) -> (Result String [Token]))
const resultDecorator = (fn) =>
  (rTokens) => {
    // Propogate errors
    if (Result.Error.hasInstance(rTokens)) {
      return rTokens;
    }
    const tokens = rTokens.matchWith({ Ok: (x) => x.value });
    const testResult = fn(tokens);
    if (Result.Error.hasInstance(testResult)) {
      return testResult;
    }
    return rTokens;
  }

// sequentialLabelCheck :: (Result String [Token]) -> (Result String [Token])
const sequentialLabelCheck = resultDecorator(
  reduce((prev, next) => {
    const pToken = prev.matchWith({ Ok: (x) => x.value });
    if (pToken.type === patterns.LABEL && next.type === patterns.LABEL) {
      return reduced(Result.Error(`Program cannot contain sequential labels. Found @ label [${getLabelValue(pToken)}]`));
    }
    return Result.Ok(next);
  }, Result.Ok({ type: null }))
);

// sameLabelCheck :: (Result String [Token]) -> (Result String [Token])
const sameLabelCheck = resultDecorator(
  reduce((rAcc, token) => {
    const acc = rAcc.matchWith({ Ok: x => x.value });
    if (token.type === patterns.LABEL) {
      const labelValue = getLabelValue(token);
      if (contains(labelValue, acc)) {
        return reduced(Result.Error(`Program cannot contain duplicate labels. Found @ [${labelValue}]`));
      }
      return Result.Ok([...acc, labelValue]);
    }
    return rAcc;
  }, Result.Ok([]))
);

module.exports = compose(
  mFold(Future.reject, Future.of),
  sameLabelCheck,
  sequentialLabelCheck,
  Result.Ok
);

const Maybe = require('folktale/maybe');
const Result = require('folktale/result');
const { prop } = require('ramda');

const matcher = require('./matcher');
const createToken = require('./create-token');

// createMatchObj :: String -> a -> Int -> Match
const createMatchObj = (tokenType, value, newPtrPos) => ({ tokenType, value, newPtrPos });

const branchMatch = {
  // checkMatchBranch -> String -> MatchBranch -> Int -> String -> (Maybe Match)
  checkMatchBranch: (checkStr, matchBranch, i, input) => {
    const [match, next] = matchBranch;
    if (match instanceof RegExp) {
      const isMatch = match.test(checkStr);
      if (isMatch) {
        // Keep adding characters until it's not a match anymore
        let ptr = i + 1;
        let eCheck = checkStr;

        while (1) {
          if (ptr < input.length) {
            eCheck += input[ptr];
            const nextMatch = match.test(eCheck);

            if (!nextMatch) { // eslint-disable-line max-depth
              return branchMatch
                .getDeepBranchToken(eCheck.slice(0, eCheck.length - 1), next, ptr - 1, input);
            }
            ptr++;
          } else if (typeof next === 'string') {
            return Maybe.Just(createMatchObj(next, eCheck, i));
          }
        }
      } else {
        return Maybe.Nothing();
      }
    }
    // Exact match
    const diff = match.length - checkStr.length;
    let eCheck = checkStr;
    if (diff > 0) {
      if (i + 1 >= input.length) {
        return Maybe.Nothing();
      }
      eCheck += input.substr(i + 1, diff);
    } else if (diff < 0) {
      return Maybe.Nothing();
    }

    // Match?
    if (eCheck === match) {
      return branchMatch
        .getDeepBranchToken(eCheck, next, i + diff, input);
    }

    return Maybe.Nothing();
  },

  // getDeepBranchToken :: String -> Int -> Int -> String -> (Maybe Match)
  getDeepBranchToken: (eCheck, next, i, input) => {
    if (Array.isArray(next)) {
      const maybeDeepMatch = next
        .map(nextMatchBranch => {
          const i_ = (i + 1 >= input.length)
            ? i
            : i + 1;

          return branchMatch.checkMatchBranch(input[i_], nextMatchBranch, i_, input)
        })
        .find(Maybe.Just.hasInstance);

      if (!maybeDeepMatch) {
        return Maybe.Nothing();
      }

      return maybeDeepMatch
        .map(deepMatch => createMatchObj(deepMatch.tokenType, eCheck + deepMatch.value, deepMatch.newPtrPos))
    }

    return Maybe.Just({
      tokenType: next,
      value: eCheck,
      newPtrPos: i
    });
  }
}

// tokenise :: String -> Result String [Token]
module.exports = (input) => {
  let checkStr = '';
  const tokens = [];

  for (let i = 0; i < input.length; i++) {
    checkStr += input[i];

    for (const matchBranch of matcher) {
      const result = branchMatch.checkMatchBranch(checkStr, matchBranch, i, input);
      if (Maybe.Just.hasInstance(result)) {

        const { tokenType, value, newPtrPos } = result.matchWith({
          Just: prop('value'),
          Nothing: () => null
        });

        const token = createToken(tokenType, value, i, newPtrPos);
        checkStr = '';
        i = newPtrPos;

        tokens.push(token);
        break;
      }
    }
  }

  if (checkStr !== '') {
    return Result.Error(`Tokenisation Error: Unrecognised token '${checkStr}' at position ${input.length - checkStr.length}`);
  }

  return Result.Ok(tokens);
}

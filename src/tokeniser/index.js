const matcher = require('./matcher');
const createToken = require('./create-token');

const branchMatch = {
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
              return branchMatch.getDeepBranchToken(eCheck.slice(0, eCheck.length - 1), next, ptr - 1, input);
            }
            ptr++;
          } else if (typeof next === 'string') {
            return {
              tokenType: next,
              value: eCheck,
              newPtrPos: i
            };
          }
        }
      }
    }
    // Exact match
    const diff = match.length - checkStr.length;
    let eCheck = checkStr;
    if (diff > 0) eCheck += input.substr(i + 1, diff)
    else if (diff < 0) return false;

    // Match?
    if (eCheck === match) {
      return branchMatch.getDeepBranchToken(eCheck, next, i + diff, input);
    }

    return false;
  },

  getDeepBranchToken: (eCheck, next, i, input) => {
    if (Array.isArray(next)) {
      const deepMatch = next
        .map(nextMatchBranch => {
          if (i + 1 >= input.length) return branchMatch.checkMatchBranch(input[i], nextMatchBranch, i, input)
          return branchMatch.checkMatchBranch(input[i + 1], nextMatchBranch, i + 1, input)
        })
        .find(matchResult => typeof matchResult === 'object');

      if (!deepMatch) return false;
      return {
        tokenType: deepMatch.tokenType,
        value: eCheck + deepMatch.value,
        newPtrPos: deepMatch.newPtrPos
      };
    }

    return {
      tokenType: next,
      value: eCheck,
      newPtrPos: i
    };
  }
}

module.exports = (input) => {
  let checkStr = '';
  const tokens = [];

  for (let i = 0; i < input.length; i++) {
    checkStr += input[i];

    for (const matchBranch of matcher) {
      const result = branchMatch.checkMatchBranch(checkStr, matchBranch, i, input);
      if (result) {
        const token = createToken(
          result.tokenType,
          result.value,
          i,
          result.newPtrPos
        );
        checkStr = '';
        i = result.newPtrPos;

        tokens.push(token);
        break;
      }
    }
  }

  if (checkStr !== '') {
    console.log(`Unrecognised token '${checkStr}' at position ${input.length - checkStr.length}`)
  }

  return tokens;
}

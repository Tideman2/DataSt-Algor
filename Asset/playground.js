var bagOfTokensScore = function (tokens, power) {
  tokens.sort((a, b) => a - b);
  let score = 0;

  function playUp(token, position) {
    score += 1;
    power -= token;
    tokens.splice(position, 1);
  }

  function playDown(token) {
    power += token;
    score -= 1;
    tokens.pop();
  }

  function checkIfLastToken() {
    if (tokens.length < 2) {
      if (power >= tokens[0]) {
        playUp(tokens[0]);
      }
      return true; // signal to stop loop
    }
    return false;
  }

  // [4,37,54,64,66,70,71,75,91,91]

  while (tokens.length > 0) {
    if (checkIfLastToken()) break;
    if (power >= tokens[0]) {
      const tokenToPlay = tokens[0];
      playUp(tokens[0], 0);
      console.log(power, score, tokenToPlay, [...tokens]);
    } else if (power < tokens[0] && score === 0) {
      break;
    } else {
      let tokenToPlay = tokens[tokens.length - 1];
      playDown(tokenToPlay);
      console.log(power, score, tokenToPlay, "this is play down", [...tokens]);
    }
  }
  return score;
};

console.log(bagOfTokensScore([4, 37, 54, 64, 66, 70, 71, 75, 91, 91], 20));

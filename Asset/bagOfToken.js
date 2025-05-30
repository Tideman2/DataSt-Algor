//brute forced
// var bagOfTokensScore = function (tokens, power) {
//   tokens.sort((a, b) => a - b);
//   let score = 0;

//   function playUp(token, position) {
//     score += 1;
//     power -= token;
//     tokens.splice(position, 1);
//   }

//   function playDown(token) {
//     power += token;
//     score -= 1;
//     tokens.pop();
//   }

//   function checkIfLastToken() {
//     if (tokens.length < 2) {
//       if (power >= tokens[0]) {
//         playUp(tokens[0]);
//       }
//       return true; // signal to stop loop
//     }
//     return false;
//   }

//   // [4,37,54,64,66,70,71,75,91,91]

//   while (tokens.length > 0) {
//     if (checkIfLastToken()) break;
//     if (power >= tokens[0]) {
//       const tokenToPlay = tokens[0];
//       playUp(tokens[0], 0);
//     } else if (power < tokens[0] && score === 0) {
//       break;
//     } else {
//       let tokenToPlay = tokens[tokens.length - 1];
//       playDown(tokenToPlay);
//     }
//   }
//   return score;
// };

//optimized solution
var bagOfTokensScore = function (tokens, power) {
  tokens.sort((a, b) => a - b);
  let score = 0;
  let low = 0;
  let high = tokens.length - 1;

  function playUp(token) {
    score += 1;
    power -= token;
    // tokens.splice(position, 1);
  }

  function playDown(token) {
    power += token;
    score -= 1;
    // tokens.pop();
  }

  function checkIfLastToken() {
    if (low === high) {
      if (power >= tokens[low]) {
        playUp(tokens[low]);
      }
      return true; // signal to stop loop
    }
    return false;
  }

  while (low <= high) {
    if (power >= tokens[low]) {
      playUp(tokens[low]);
      low += 1;
    } else if (score > 0) {
      if (checkIfLastToken()) break;
      playDown(tokens[high]);
      high -= 1;
    } else {
      break;
    }
  }
  return score;
};

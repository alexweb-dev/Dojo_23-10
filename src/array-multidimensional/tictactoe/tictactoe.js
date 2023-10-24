/*
Create a function `winner` which analyses a 3x3 tic-tac-toe grid.
* "X" represents player X
* "0" represents player 0
* " " (space) is an empty cell

grid :
[
  ["X", "O", "O"],
  ["X", "O", "O"],
  ["X", " ", " "],
]

The function should returns the winner :
* "X wins" when X wins
* "O wins" when O wins
* "Cat's game" if it's a draw or if nobody wins
* "{player} is a cheater" where {player} is replaced by the player who cheated.

The function should throw :
* TypeError if the grid is null or not an array.
* RangeError if the grid has not the size expected
* Error with the text "Illegal character" if the grid contains at least one illegal character.

*/

// TODO add your code here
function winner(grid) {
  if (grid === null || !Array.isArray(grid)) {
    throw new TypeError('Grid can\'t be null and has to be an array');
  }
  if (grid.length !== 3 || grid[0].length !== 3 || grid[1].length !== 3 || grid[2].length !== 3) {
    throw new RangeError('Grid has to be a 3x3');
  }

  let numberOfX = 0;
  let numberOfO = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const eachObject = grid[i][j];
      if (eachObject !== 'X' && eachObject !== 'O' && eachObject !== ' ') {
        throw new Error('Illegal character');
      }

      if (eachObject === 'X'|| eachObject === 'O'){
        if (eachObject === 'X'){
          numberOfX ++;
        }
        else if (eachObject === 'O'){
          numberOfO ++;
        }
      }
    }
  }
  if (numberOfX - numberOfO > 1){
    return ("X is a cheater")
  }
  else if (numberOfX - numberOfO < -1){
    return ("O is a cheater")
  }

  for (let i = 0; i < 3; i++) {
    if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
      if (grid[i][0] === 'X') {
        return 'X wins';
      } else if (grid[i][0] === 'O') {
        return 'O wins';
      }
    }
  }

  for (let j = 0; j < 3; j++) {
    if (grid[0][j] === grid[1][j] && grid[1][j] === grid[2][j]) {
      if (grid[0][j] === 'X') {
        return 'X wins';
      } else if (grid[0][j] === 'O') {
        return 'O wins';
      }
    }
  }

  if (
    (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) ||
    (grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2])
  ) 
  {
    if (grid[1][1] === 'X') {
      return 'X wins';
    } else if (grid[1][1] === 'O') {
      return 'O wins';
    }
  }

  return 'Cat\'s game';
}


// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof winner, "function");
assert.strictEqual(winner.length, 1);
assert.strictEqual(
  winner([
    ["X", "O", "O"],
    ["X", "O", "O"],
    ["X", " ", " "],
  ]),
  "X wins"
);
assert.strictEqual(
  winner([
    ["X", "O", "X"],
    ["O", "O", "O"],
    [" ", " ", "X"],
  ]),
  "O wins"
);
assert.strictEqual(
  winner([
    ["X", "X", "O"],
    ["O", "X", "O"],
    ["X", "O", "X"],
  ]),
  "X wins"
);
assert.strictEqual(
  winner([
    ["O", "X", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"],
  ]),
  "X wins"
);
assert.strictEqual(
  winner([
    ["O", "X", "O"],
    ["X", "X", "O"],
    ["O", "O", "X"],
  ]),
  "Cat's game"
);
assert.strictEqual(
  winner([
    ["O", "X", " "],
    [" ", " ", " "],
    [" ", "O", " "],
  ]),
  "Cat's game"
);
assert.strictEqual(
  winner([
    ["O", "X", "X"],
    ["X", "X", "O"],
    ["X", "O", "X"],
  ]),
  "X is a cheater"
);
assert.throws(() => [winner(null)], TypeError);
assert.throws(() => [winner("OXXOXOXXOX")], TypeError);
assert.throws(() => {
  winner([
    ["O", "X", "X"],
    ["X", "X", "O"],
  ]);
}, RangeError);
assert.throws(() => {
  winner([
    ["O", "X", "X"],
    ["X", "X"],
    ["X", "O", "X"],
  ]);
}, RangeError);
assert.throws(() => {
  winner([
    ["O", "X", "X"],
    ["O", "X", "0"],
    ["X", "O", "X"],
  ]);
}, /^Error: Illegal character$/);

// End of tests
console.log('GJ');

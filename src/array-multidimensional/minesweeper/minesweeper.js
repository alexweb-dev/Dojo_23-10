/*
Create a function `sweep` which takes a grid and two numbers as parameters :
* grid : a minesweeper matrix where 0 are empty cells and 1 are bombs. The width and height of the grid can vary.
* row : the vertical coordinate of the cell to sweep
* column : the horizontal coordinate of the cell to sweep

The function will check the cell using the coordinates and returns :
* "kaboom", if it contains a boom
* the number of adjacent bombs, if it's empty

The function will throw :
* TypeError if grid is null or not an array
* TypeError if at least one value of the grid is not 0 or 1
* TypeError if row or column are null or not a number
* RangeError if grid has a width or height inferior to one
* RangeError if row or column are out of bounds

Example :

grid :
[
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [1, 0, 0, 0]
]
row : 1
column : 2

result : 2

*/

// TODO add your code here
function sweep(grid, row, column) {
  if (grid === null || !Array.isArray(grid)) {
    throw new TypeError('Grid must be an array and cannot be null.');
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 0 && grid[i][j] !== 1) {
        throw new TypeError('Grid should only contain values of 0 or 1.');
      }
    }
  }

  if (row === null || typeof row !== 'number' || column === null || typeof column !== 'number') {
    throw new TypeError('Row and column must be numbers and cannot be null.');
  }

  if (grid.length < 1 || grid[0].length < 1) {
    throw new RangeError('Grid width and height must be greater than or equal to one.');
  }

  if (row < 0 || row >= grid.length || column < 0 || column >= grid[0].length) {
    throw new RangeError('Row and column are out of bounds.');
  }

  if (grid[row][column] === 1) {
    return 'kaboom';
  }

  let bombCount = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newRow = row + i;
      const newColumn = column + j;
      if (newRow >= 0 && newRow < grid.length && newColumn >= 0 && newColumn < grid[0].length) {
        bombCount += grid[newRow][newColumn];
      }
    }
  }

  return bombCount;
}
// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof sweep, "function");
assert.strictEqual(sweep.length, 3);
const grid = [
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [1, 0, 0, 0],
];
assert.strictEqual(sweep(grid, 1, 1), "kaboom");
assert.strictEqual(sweep(grid, 0, 3), "kaboom");
assert.strictEqual(sweep(grid, 2, 0), "kaboom");
assert.strictEqual(sweep(grid, 0, 0), 1);
assert.strictEqual(sweep(grid, 1, 2), 2);
assert.strictEqual(sweep(grid, 2, 3), 0);
assert.throws(() => {
  sweep(null, 1, 1);
}, TypeError);
assert.throws(() => {
  sweep("a", 1, 1);
}, TypeError);
assert.throws(() => {
  sweep(
    [
      [0, 0, "0", 1],
      [0, 1, 0, 1],
      [1, 0, 0, 0],
    ],
    1,
    1
  );
}, TypeError);
assert.throws(() => {
  sweep(
    [
      [0, 0, 0, 1],
      [0, -1, 0, 1],
      [1, 0, 0, 0],
    ],
    1,
    1
  );
}, TypeError);
assert.throws(() => {
  sweep(
    [
      [0, 0, 0, 1],
      [0, 1, null, 1],
      [1, 0, 0, 0],
    ],
    0,
    1
  );
}, TypeError);
assert.throws(() => {
  sweep(grid, -1, 1);
}, RangeError);
assert.throws(() => {
  sweep(grid, 1, 5);
}, RangeError);

// End of tests
console.log('GJ');
/*
Create a function `build` which returns a pyramid of `n` floors, from top to bottom, stored in a string array.

Example :

n = 5 :
[
    "    *    ",
    "   ***   ",
    "  *****  ",
    " ******* ",
    "*********"
]

If `n` is zero or negative, throw a RangeError.
If `n` is null or not a number, throw a TypeError.

*/

// TODO add your code here
function build(n) {
  if (n === null || typeof n !== 'number') {
    throw new TypeError('Value should be a number and not null');
  } else if (n <= 0) {
    throw new RangeError('Value should be strictly positive');
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    let row = ' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1) + ' '.repeat(n - i - 1);
    result.push(row);
  }

  return result;
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof build, "function");
assert.strictEqual(build.length, 1);
assert.deepStrictEqual(build(1), ["*"]);
assert.deepStrictEqual(build(2), [" * ", "***"]);
assert.deepStrictEqual(build(5), [
  "    *    ",
  "   ***   ",
  "  *****  ",
  " ******* ",
  "*********",
]);
assert.throws(() => {
  build(0);
}, RangeError);
assert.throws(() => {
  build(-1);
}, RangeError);
assert.throws(() => {
  build(null);
}, TypeError);
assert.throws(() => {
  build("a");
}, TypeError);
// End of tests
console.log("gg");

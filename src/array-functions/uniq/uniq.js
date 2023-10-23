/*
Implement a function `uniq` which takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

Example:
* ['a','a','b','b','c','a','b','c'] --> ['a','b','c','a','b','c']

Don't mutate the parameter.

Bonus : do not use a loop

*/

// TODO add your code here
function uniq(e) {
  return e.filter((value, i, array) => {
    return value !== array[i + 1] || i === array.length - 1;
  });
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof uniq, "function");
assert.strictEqual(uniq.length, 1);
assert.deepStrictEqual(uniq(["a", "a", "b", "b", "c", "a", "b", "c", "c"]), [
  "a",
  "b",
  "c",
  "a",
  "b",
  "c",
]);
assert.deepStrictEqual(uniq(["a", "a", "a", "b", "b", "b", "c", "c", "c"]), [
  "a",
  "b",
  "c",
]);
assert.deepStrictEqual(uniq([]), []);
assert.deepStrictEqual(uniq(["foo"]), ["foo"]);
assert.deepStrictEqual(uniq(["bar", "bar", "bar", "bar", "bar"]), ["bar"]);
assert.deepStrictEqual(uniq([undefined]), [undefined]);
assert.deepStrictEqual(uniq([undefined, "a", "a"]), [undefined, "a"]);
assert.deepStrictEqual(uniq([""]), [""]);
let test = ["a", "a", "b"];
const originalTest = test.slice();
uniq(test);
assert.deepStrictEqual(test, originalTest, "don't mutate the parameter");


// End of tests
console.log("GJ");
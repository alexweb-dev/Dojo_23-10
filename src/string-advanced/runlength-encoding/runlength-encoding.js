/*
Run-length encoding (RLE) is a very simple form of lossless data compression, in which same consecutive elements are stored as a single data value and count.

Create a function `encode` that implements a RLE of a string. If a character is present only once or twice consecutively, you must not compress it.

Example:
* "a" -> "a"
* "aa" -> "aa"
* "aaa" -> "a3"
* "aaaabbccca" -> "a4bbc3a"

If the argument is null, return an empty string.
If the argument is not a string, throw a TypeError.

Add you own tests.

*/

// TODO add your code here
function encode(inputString) {
    if (inputString === null) {
        return "";
    }
    if (typeof inputString !== 'string') {
        throw new TypeError('Input should be a string');
    }
    let result = "";
    let count = 1;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === inputString[i + 1]) {
            count++;
        } else {
            if (count === 1) {
                result += inputString[i];
            } else if (count === 2) {
                result += inputString[i] + inputString[i];
            } else {
                result += inputString[i] + count;
            }
            count = 1;
        }
    }
    return result;
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof encode, "function");
assert.strictEqual(encode.length, 1);

// Test avec un seul caractère, pas de compression
assert.strictEqual(encode("a"), "a");

// Test avec deux caractères identiques, pas de compression
assert.strictEqual(encode("aa"), "aa");

// Test avec trois caractères identiques, compression en "a3"
assert.strictEqual(encode("aaa"), "a3");

// Test avec différents caractères et compression
assert.strictEqual(encode("aaaabbccca"), "a4bbc3a");

// Test avec une chaîne vide, retourne une chaîne vide
assert.strictEqual(encode(""), "");

// Test avec un argument null, retourne une chaîne vide
assert.strictEqual(encode(null), "");

// Test avec un argument non-string, déclenche une erreur TypeError
assert.throws(() => {
    encode(123);
}, TypeError);

// End of tests
console.log("gg");

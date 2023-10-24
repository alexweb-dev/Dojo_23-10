/*
In cryptography, a Caesar cipher is a simple encryption technique, in which each letter in text is replaced by a letter some fixed number of positions down the alphabet.

For example, with a right shift of 3, a becomes d, b becomes e, and so on until w which become z. Then x, y and z become a, b and c.

Create a function `cipher` which encrypts a word (only in lowercase) using Caesar cipher, where the shift value (which can be positive or negative) is a parameter.

  word:      shift:   result:
* "abcd"     1        "bcde"
* "abcd"     -1       "zabc"
* "tacos"    3        "wdfrv"
* "zebra"    2        "bgdtc"

If `word` is null or not a string, or if `shift` is null or not a number, throw a TypeError.

Add you own tests.

*/

// TODO add your code here
function cipher(word, shift) {
  if (typeof word !== 'string' || word === null || typeof shift !== 'number' || shift === null || !Number.isInteger(shift)) {
    throw new TypeError('Word should be a string and not null, and shift should be a number and not null');
  } else {
    let result = "";
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (/[a-z]/.test(char)) {
        let shiftedCharCode = char.charCodeAt(0) + (shift % 26);
        if (shiftedCharCode > 'z'.charCodeAt(0)) {
          shiftedCharCode -= 26;
        } else if (shiftedCharCode < 'a'.charCodeAt(0)) {
          shiftedCharCode += 26;
        }
        result += String.fromCharCode(shiftedCharCode);
      } 
      else {
        result += char;
      }
    }
    return result;
  }
}

// Begin of tests
const assert = require("assert");
const { log } = require("console");

assert.strictEqual(typeof cipher, "function");
assert.strictEqual(cipher.length, 2);
// TODO add your tests:

// End of tests
// Test de chiffrement de César
assert.strictEqual(cipher("abcd", 1), "bcde");
assert.strictEqual(cipher("abcd", -1), "zabc");
assert.strictEqual(cipher("tacos", 3), "wdfrv");
assert.strictEqual(cipher("zebra", 2), "bgdtc");

// Test de cas spéciaux
assert.strictEqual(cipher("abcde", 26), "abcde"); // Le décalage de 26 est équivalent à aucun décalage.
assert.strictEqual(cipher("abcd", 0), "abcd"); // Aucun décalage.

// Tests d'erreur
// Test d'erreur
assert.throws(() => cipher(null, 2), {
  name: 'TypeError',
  message: 'Word should be a string and not null, and shift should be a number and not null'
});

assert.throws(() => cipher("hello", null), TypeError);
assert.strictEqual(cipher("123", 2), "123");
assert.throws(() => cipher("abcd", 2.5), TypeError); // 2.5 n'est pas un nombre entier.

console.log("gg");
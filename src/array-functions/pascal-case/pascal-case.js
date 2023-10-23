/*
Create a function `pascalCase` which convert a sentence into upper case Camel Case, also known as Pascal Case.

Example:
* "this is sparta" > "ThisIsSparta"
* "sO rAdicAL DuDe" > "SoRadicalDude"

You can't use a loop!

Don't mutate the parameter.

*/

// TODO add your code here

//      METHOD AVEC BOUCLE FOR :
// function pascalCase(e) {
//   let words = e.split(" ");
//   let result = "";
//   for (let i = 0; i < words.length; i++) {
//     const firstChar = words[i].charAt(0);
//     const restOfString = words[i].slice(1);
//     result += firstChar.toUpperCase() + restOfString.toLowerCase();
    
//    }
// return result;
// }
//      METHOD SANS BOUCLE :
function pascalCase(e) {
  const words = e.split(" ");

  const camelCase = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  return camelCase;
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof pascalCase, "function");
assert.strictEqual(pascalCase.length, 1);
assert.strictEqual(
  pascalCase.toString().includes("for "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  pascalCase.toString().includes("while "),
  false,
  "don't use a loop"
);
assert.strictEqual(pascalCase("this is sparta"), "ThisIsSparta");
assert.strictEqual(pascalCase("sO rAdicAL DuDe"), "SoRadicalDude");
let test = "no mutation";
pascalCase(test);
assert.strictEqual(test, "no mutation", "don't mutate the parameter");

// End of tests
console.log("GJ");

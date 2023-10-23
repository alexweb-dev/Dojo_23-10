/*
Create a function `fizzBuzz` which takes a number as parameter, and returns:
* "Fizz", if the argument is a multiple of 3
* "Buzz" if the argument is a multiple of 5
* "FizzBuzz", if the argument is a multiple of 3 and 5
* the argument as a string in any other case

*/

// TODO add your code here
function fizzBuzz (number){
    if (number%5 ===0 && number%3 === 0){
        return "FizzBuzz";
    }
    else if (number%3 ===0){
        return "Fizz"
    }
    if (number%5 ===0){
        return "Buzz"
    }
    else{
        return number.toString();
    }
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof fizzBuzz, "function");
assert.strictEqual(fizzBuzz.length, 1);
assert.strictEqual(fizzBuzz(3), "Fizz");
assert.strictEqual(fizzBuzz(9), "Fizz");
assert.strictEqual(fizzBuzz(5), "Buzz");
assert.strictEqual(fizzBuzz(10), "Buzz");
assert.strictEqual(fizzBuzz(15), "FizzBuzz");
assert.strictEqual(fizzBuzz(30), "FizzBuzz");
assert.strictEqual(fizzBuzz(7), "7");
assert.strictEqual(fizzBuzz(13), "13");
// End of tests

console.log("GJ");
/*
Create a function `getScore` which returns the string of the current scores of a tennis game, from a number array where each value represents the player that scored.

* [1, 1, 2, 2, 1] : serving player (1) scored twice, then the receiving player (2) scored twice, and finally the serving player (1) scored once.
The expected result is "40-30".

Game rules :

The score on the left represents the serving player (1), the score on the right represents the receiving player (2).

Scores from zero to three points are described as "love", "15", "30", and "40", respectively.

If at least three points have been scored by each player, the score is not called out as "40–40", but rather as "deuce".

If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game can be called "ad in" when the serving player (1) is ahead, and "ad out" when the receiving player (2) is ahead.

Example:
* points : [1, 1, 1], result : "40-love"
* points : [2, 1, 2, 2], result : "15-40"
* points : [1, 2, 1, 2, 1, 2], result : "deuce"
* points : [1, 1, 1, 2, 2, 2, 1], result : "ad in"

If the argument is null or not an array, throw a TypeError.
    If a value of the argument is null or not a number, throw a TypeError.
    If a value of the argument is not 1 or 2, throw a RangeError.

Add you own tests.

*/

// TODO add your code here
function getScore(scores) {
    if (scores === null || !Array.isArray(scores)) {
        throw new TypeError('The argument should be an Array');
    }
    if (scores.length === 0) {
        throw new TypeError('The scores array should not be empty');
    }
    let playerA = 0;
    let playerB = 0;
    for (let score of scores) {
        if (score !== 1 && score !== 2) {
            throw new RangeError('All scores should be 1 or 2');
        }
        if (score === 1) {
            playerA++;
        }
        else if (score === 2) {
            playerB++;
        }
    }
    const howScoreWorks = ["love", "15", "30", "40"];
    let result = null;
    if (playerA >= 3 && playerB >= 3) {
        if (playerA === playerB) {
            result = "deuce";
        }
        else if (playerA > playerB) {
            result = playerA === playerB + 1 ? "ad in" : `${howScoreWorks[playerA - 1]}-${howScoreWorks[playerB - 1]}`;
        }
        else {
            result = playerB === playerA + 1 ? "ad out" : `${howScoreWorks[playerA - 1]}-${howScoreWorks[playerB - 1]}`;
        }
    } else {
        result = `${howScoreWorks[playerA]}-${howScoreWorks[playerB]}`;
    }
    return result;
}


// Begin Tests
const assert = require("assert");

assert.strictEqual(typeof getScore, "function");
assert.strictEqual(getScore.length, 1);

// Test avec le score "40-love"
assert.strictEqual(getScore([1, 1, 1]), "40-love");

// Test avec le score "15-40"
assert.strictEqual(getScore([2, 1, 2, 2]), "15-40");

// Test avec le score "deuce"
assert.strictEqual(getScore([1, 2, 1, 2, 1, 2]), "deuce");

// Test avec le score "ad in"
assert.strictEqual(getScore([1, 1, 1, 2, 2, 2, 1]), "ad in");

// Modifiez le test avec un tableau vide comme suit
assert.throws(() => {
    getScore([]);
}, (error) => {
    return error instanceof TypeError; // Vérifie que l'erreur est de type TypeError
});

// Modifiez également le test avec un score invalide (3) de la même manière
assert.throws(() => {
    getScore([1, 2, 3, 1]);
}, (error) => {
    return error instanceof RangeError; // Vérifie que l'erreur est de type RangeError
});

// End Test
console.log("GJ");

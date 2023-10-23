/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

// TODO add your code here
function abbreviate(e){
    let cutWord = e.split(" ")
    let firstLetterWordOne = cutWord[0].charAt(0)
    let firstLetterWordTwo = cutWord[1].charAt(0)

return `${firstLetterWordOne}.${firstLetterWordTwo}`
}
module.exports = abbreviate;

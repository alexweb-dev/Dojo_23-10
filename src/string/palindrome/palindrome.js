/*
A palindrome is a word or a phrase that reads the same backwards as forwards, example. madam.

Create a function `isPalindrome` that returns if a word is a palindrome.

This function must not be case sensitive.

If the word is null or empty, return true.

Example:
* "rotor" -> true
* "tacos" -> false
* "Kayak" -> true
* null -> true

Add you own tests.

*/

// TODO add your code here
function isPalindrome(e){
    if(e === null || e === ""){
        return true;
    }
    e = e.toLowerCase();
    let startCount = 0;
    let endCount = e.length - 1
    while(startCount < endCount){
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    
}
module.exports = isPalindrome;

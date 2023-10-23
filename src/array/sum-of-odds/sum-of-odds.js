/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

Example:
* [] -> 0
* [1, 2, 3] -> 4

*/

// TODO add your code here
function sum(n){
    if (!n || n.length === 0) {
        return 0;
    }
    let result = 0;
    for (let i=0; i<n.length; i++){
        if (n[i]%2 != 0){
            result += n[i];
        }
    }
    return result;
}
module.exports = sum;

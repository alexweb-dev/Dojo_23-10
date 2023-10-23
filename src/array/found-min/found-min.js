/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here
function min(n) {
if (!n || n.length === 0) {
    return null;
  }
  let nMin = n[0];
  for (let i = 1; i < n.length; i++) {
    if (n[i] < nMin) {
      nMin = n[i];
    }}
   return nMin;
}
module.exports = min;

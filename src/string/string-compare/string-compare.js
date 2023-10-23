/*
Create a function `compare` which returns the number of identical characters at same position, from two String of same length.

If the two arguments doesn't have the same length or at least one is null, return -1 instead.

Example:
  string1  string2     result
* "a"      "a"         1
* "a"      "b"         0
* "aa"     "ba"        1
* "cassis" "castor"    3
* "tacos"  "poulpe"   -1
* null     "a"        -1

Add you own tests.

*/

// TODO add your code here
function compare(array1, array2){
  let result = 0;
  if(array1 === null || array2 === null || array1.length !== array2.length){
    result = -1;
    return result;
  }
  else{
    for (let i = 0; i < array1.length; i++){
      if (array1[i] === array2[i]){
        result ++;
      }
    }
  }
  return result;
}

module.exports = compare;

/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minuts.

If the argument is not correctly formatted, return null.

* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null

Add you own tests.

*/

// TODO add your code here
function convertTime(time) {
    const cutTimer = time.split(":");
    
    if (cutTimer.length !== 2) {
      return null;
    }
  
    const hours = parseInt(cutTimer[0]);
    const minutes = parseInt(cutTimer[1]);
  
    if (hours === hours && minutes === minutes) {
      return hours * 60 + minutes;
    } else {
      return null;
    }
  }
  
module.exports = convertTime;

// // Cute Angles

// function dms(angle) {
//   var MINUTES_IN_ANGLE = 60;
//   var SECONDS_IN_MINUTES = 60;

//   var degrees = Math.floor(angle);
//   var minutes = Math.floor((angle * MINUTES_IN_ANGLE) % MINUTES_IN_ANGLE);
//   var seconds = Math.floor((angle * MINUTES_IN_ANGLE * SECONDS_IN_MINUTES) % SECONDS_IN_MINUTES);
//   return `${degrees}\xB0${format(minutes)}'${format(seconds)}"`;
// }

// function format(num) {
//   var numStr = String(num);
//   return numStr.length < 2 ? `0${numStr}` : numStr
// }

// console.log(dms(30));        // 30°00'00"
// console.log(dms(76.73));     // 76°43'48"
// console.log(dms(254.6));     // 254°35'59"
// console.log(dms(93.034773)); // 93°02'05"
// console.log(dms(0));         // 0°00'00"
// console.log(dms(360));       // 360°00'00" or 0°00'00"

// Combing Arrays

function union(arr1, arr2) {

  
}

union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
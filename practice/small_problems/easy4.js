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

// function union(arr1, arr2) {
//   var outputArr = [];

//   for (var i = 0; i < arguments.length; i++) {
//     arguments[i].forEach(function(element) {
//       if (outputArr.indexOf(element) === -1) {
//         outputArr.push(element);
//       }
//     });
//   }
//   return outputArr;
// }

// console.log(union([1, 3, 5], [3, 6, 9], [1, 200, 3, 800])); // [1, 3, 5, 6, 9]

// halfsies

// function halvsies(arr) {
//   var half = Math.ceil(arr.length / 2);
//   var firstHalf = arr.slice(0, half);
//   var secondHalf = arr.slice(half);

//   return [firstHalf, secondHalf];
// }

// console.log(halvsies([1, 2, 3, 4]))    // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3])) // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]))             // [[5], []]
// console.log(halvsies([]))              // [[], []]

// FIND the DUPLICATE

// function findDup(arr) {
//   return arr.filter(function(el) {
//     return arr.lastIndexOf(el) !== arr.indexOf(el);
//   })[0];
// }


// console.log(findDup([1, 5, 3, 1]))                              // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//          7,  34, 57, 74, 45, 11, 88, 67,  5, 58]))  // 73


// Combine Two Lists
// function interleave(arr1, arr2) {
//   var combinedArr = [];
//   for (var i = 0; i < arr1.length; i++) {
//     combinedArr.push(arr1[i], arr2[i]);
//   }
//   return combinedArr;
// }


// console.log(interleave([1, 2, 3], ['a', 'b', 'c'])) // [1, 'a', 2, 'b', 3, 'c']


// Multiplicaive Average

// function showMultiplicativeAverage(arr) {
//   var average = arr.reduce(function(product, el) {
//     return product * el;
//   }) / arr.length;

//   return average.toFixed(3);
// }

// console.log(showMultiplicativeAverage([3, 5]));                 // '7.500'
// console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));  // '28361.667'111

// Multiply Lists

// function multiplyList(arr1, arr2) {
//   var multiplied = [];

//   for (var i = 0; i < arr1.length; i++) {
//     multiplied.push(arr1[i] * arr2[i]);
//   }
//   return multiplied;
// }

// console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]

// DIGITS LIST
// function digitList(num) {
//   return String(num).split('').map(Number);
// }


// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]


// How Many
// function countOccurrences(vehicleList) {
//   var vehicleCount = {};

//   vehicleList.forEach(function(vehicle){
//     vehicleCount[vehicle] = vehicleCount[vehicle] || 0;
//     vehicleCount[vehicle] += 1;
//   });
  
//   for (var vehicle in vehicleCount) {
//     console.log(`${vehicle} -> ${vehicleCount[vehicle]}`);
//   }
// }


// var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
// console.log(countOccurrences(vehicles));

// // console output
// // car => 4
// // truck => 3
// // SUV => 1
// // motorcycle => 2


// Array Average

// function average(arr) {
//   var avg = arr.reduce(function(sum, num) {
//     return sum += num;
//   }) / arr.length;

//   return Math.floor(avg);
// }


// console.log(average([1, 5, 87, 45, 8, 8]));    // 25
// console.log(average([9, 47, 23, 95, 16, 52])); // 40
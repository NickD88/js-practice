// // Alphabetical Numbers

// var NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

// function alphabeticNumberSort(numArr) {
//   return numArr.sort(function(a, b) {
//     if (NUMBERS[a] < NUMBERS[b]) {
//       return -1
//     } else if (NUMBERS[a] > NUMBERS[b]) {
//       return 1
//     } else {
//       return 0
//     }
//   })
// }

// console.log(alphabeticNumberSort([0, 19, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// // Sum of Digits

// function sum(num) {
//   return String(num).split('').map(Number).reduce(function(sum, num) {
//     return sum + num;
//   });
// }
 

// console.log(sum(23));          // 5
// console.log(sum(496));         // 19
// console.log(sum(123456789));   // 45


// // Multiply All Pairs

// function multiplyAllPairs(arr1, arr2) {
//   var mulpliedArr = [];

//   arr1.forEach(function(arr1El) {
//     arr2.forEach(function(arr2El) {
//       mulpliedArr.push(arr1El * arr2El)
//     });
//   });
//   return mulpliedArr.sort(function(a, b) {
//     return a - b;
//   });
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]


// // Sum of Sums

// function sumOfSums(arr) {
//   var sumsArr = []
//   arr.forEach(function(num, idx) {
//     sumsArr.push(num + sumsArr[idx - 1] || num);
//   });
//   return sumsArr.reduce(function(sum, num) {
//     return sum += num;
//   });
// }


// console.log(sumOfSums([3, 5, 2]));       // (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
// console.log(sumOfSums([1, 5, 7, 3]));    // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
// console.log(sumOfSums([4]));             // 4
// console.log(sumOfSums([1, 2, 3, 4, 5])); // 35

// // Leading Substrings

function substringsAtStart(str) {
  return Array(str.length).fill(str).map(function(str, idx) {
    return str.substr(0, idx + 1);
  });
}

// console.log(substringsAtStart('abc'));   // ['a', 'ab', 'abc']
// console.log(substringsAtStart('a'));     // ['a']
// console.log(substringsAtStart('xyzzy')); // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

// All Substrings
function substrings(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    result = result.concat(substringsAtStart(str.substring(i)));
  }
  return result;
}

console.log(substrings('abcde'));
// result
[ 'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e' ]
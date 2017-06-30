// function lastInArray(array) {
//   return array[array.length - 1];
// }

// console.log(lastInArray([1, 2, 3])) // 3
// console.log(lastInArray(['a'])) // a

// function rollCall(nameArray) {
//   for (var i = 0; i < nameArray.length; i++) {
//     console.log(nameArray[i]);
//   }
// }

// var names = ['Abby', 'Mark', 'Sam', 'John'];
// rollCall(names);

// function reverseArray(arr) {
//   reversedArray = [];
//   for (var i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }

//   return reversedArray;
// }

// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// function findFirstInstance(value, array) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] ===  value) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findFirstInstance(2, [1, 2, 3, 4, 5, 2])) // 1

// console.log(findFirstInstance('a', ['z', 3, 5, 'e', 9, 'a'])) // 5

// function deconstuctArray(array) {
//   var convertedStr = '';
//   for (var i = 0; i < array.length; i++) {
//     convertedStr += String(array[i]);
//   }
//   return convertedStr;
// }

// console.log(deconstuctArray(['a', 2, 5, 'f'])) // 'a25f'
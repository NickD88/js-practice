// function push(array, value) {
//   array[array.length] = value;
//   return array.length;
// }

// var count = [1, 2, 3];
// console.log(push(count, 4));   // 4
// console.log(count);            // [ 1, 2, 3, 4 ]


// function pop(array) {
//   newLength = array.length - 1;
//   value = array[newLength];
//   array.length = newLength;
//   return value;
// }

// array = [1, 2, 3, 4];
// console.log(pop(array)); // 4
// console.log(array); /// [1, 2, 3]

// function unshift(array, value) {
//   for (var i = array.length; i > 0; i--) {
//     array[i] = array[i - 1];
//   }
//   array[0] = value;

//   return array.length;
// }

// var count = [1, 2, 3];
// console.log(unshift(count, 0));        // 4
// console.log(count);                    // [ 0, 1, 2, 3 ]

// function shift(array) {
//   value = array[0];

//   for (var i = 0; i < array.length; i++) {
//     array[i] = array[i + 1];
//   }

//   array.length = array.length - 1;
//   return value;
// }

// var count = [1, 2, 3];
// console.log(shift(count));           // 1
// console.log(count);                  // [ 2, 3 ]
// console.log((false && undefined)); // false
// console.log((false || undefined)); // undefined
// console.log(((false && undefined) || (false || undefined))); // undefined
// console.log(((false || undefined) || (false && undefined))); // false
// console.log(((false && undefined) && (false || undefined))); // false
// console.log(((false || undefined) && (false && undefined))); // undefined
// console.log(('a' || (false && undefined) || '')); // 'a'
// console.log(((false && undefined) || 'a' || '')); // 'a'
// console.log(('a' && (false || undefined) && '')); // undefined
// console.log(((false || undefined) && 'a' && '')); // undefined

// *************************

// var i = 0;
// while (i < 10) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }

//   i += 1;
// }

// *************************

// var row;
// var i;
// var j;

// function padLeft(num) {
//   return String(num).length <= 1 ? ' ' + num : num;
// }

// for (i = 1; i <= 10; i++) {
//   row = '';
//   for (j = 1; j <= 10; j++) {
//     row += padLeft(i * j) + ' ';
//   }
//   console.log(row + '\n');
// }

// ****************************

// function getSelectedColumns(numbers, cols) {
//   var result = [];

//   for (var i = 0; i < numbers.length; i++) {
//     for (var j = 0; j < cols.length; j++) {
//       if (!result[j]) {
//         result[j] = [];
//       }

//       result[j][i] = numbers[i][cols[j]];
//     }
//   }

//   return result;
// }

// // Given array of number arrays
// var array1 = [[1, 2, 3], [4, 5 ,6], [7, 8 ,9]];
// var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// // array1 in row/column format
// // [[1, 2, 3],
// //  [4, 5, 6],
// //  [7, 8, 9]]

// console.log(getSelectedColumns(array1, [0]));     // [[1]]; expected [[1, 4, 7]]
// console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected [[1, 4, 7], [3, 6, 9]]
// console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 4]]; expected [[2, 2, 2], [3, 3, 3]]

// ******************************

// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + (counter * rate));

// function counter(count) {
//   // ...
// }
// // 'The total value is 15'

// // ********

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + (counter * rate));

// var counter = 5;
// var rate = 3;
// // 'The total value is NaN

// // *********

// var counter = 5;
// var rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + (counter * rate));
// // 'The total value is 15'

// *******************************


// function debugIt() {
//   var status = 'debugging';
//   function logger() {
//     console.log(status);
//   }

//   logger();
// }

// debugIt();

// The debugIt function  calls the inner logger() function and logs out the status variable.  The inner function will have access to all outer function
// and global scop variables.  

// **********************************

// function invoiceTotal() {
//   var total = 0;

//   for (var i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

// console.log(invoiceTotal(20, 30, 40, 50));             // works
// console.log(invoiceTotal(20, 30, 40, 50, 40, 40));     // doesn't work; how can you make it work? Loop throught the arguments array addinging to total

// ************************************

function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

console.log(productOfSums([1, 2, 3], [1, 2, 3])); // 36
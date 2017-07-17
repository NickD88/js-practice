// var myArray = [1, 2, 3, 4];
// var myOtherArray = myArray;

// myArray.pop();
// console.log(myOtherArray); // logs [1, 2, 3]

// myArray = [1, 2];  // assigns myArray to a new object reference
// console.log(myOtherArray); // logs [1, 2, 3]


// ********************

// var myArray = [1, 2, 3, 4];
// var myOtherArray = [];

// for (var i = 0; i < myArray.length; i++) {
//   myOtherArray.push(myArray[i]);
// }

// var myThirdArray = myArray.slice();

// console.log(myOtherArray);

// myArray.pop();
// console.log(myArray);

// myArray = [1, 2];
// console.log(myArray);

// console.log(myThirdArray);

// console.log(myOtherArray);

// ************************

// function concat(array1, secondArgument) {
//   var outputArr = array1.slice();

//   if (Array.isArray(secondArgument)) {
//     for (var i = 0; i < secondArgument.length; i++) {
//       outputArr.push(secondArgument[i]);
//     }
//   } else {
//     outputArr[outputArr.length] = secondArgument;
//   }
//   return outputArr;
// }

// console.log(concat([1, 2, 3], [4, 5, 6]));            // [1, 2, 3, 4, 5, 6]
// console.log(concat([1, 2], 3));                       // [1, 2, 3]
// console.log(concat([2, 3], ['two', 'three']));        // [2, 3, "two", "three"]
// console.log(concat([2, 3], 'four'));                  // [2, 3, "four"]


// var obj = { a: 2, b: 3 };
// var newArray = concat([2, 3], obj);      // [2, 3, { a: 2, b: 3 }]
// obj.a = 'two';
// console.log(newArray);                                // [2, 3, { a: 'two', b: 3 }]

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, obj];
// var arr3 = concat(arr1, arr2);
// console.log(arr3);                                    // [1, 2, 3, 4, 5, { a: 'two', b: 3 }]
// obj.b = 'three';
// console.log(arr3);                                    // [1, 2, 3, 4, 5, { a: 'two', b: 'three' }]

// arr3[5].b = 3;                           // or arr3[5]['b'] = 3
// console.log(obj);                                     // { a: 'two', b: 3 }

// ****************************

// function concat() {
//   var outputArr = [];

//   for (var i = 0; i < arguments.length; i++) {
//     if (Array.isArray(arguments[i])) {
//       for (var j = 0; j < arguments[i].length; j++) {
//         outputArr.push(arguments[i][j]);
//       }
//     } else {
//       outputArr[outputArr.length] = arguments[i];
//     }
//   }
//   return outputArr;
// }


// console.log(concat([1, 2 ,3], [4, 5, 6], [7, 8, 9]));           // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(concat([1, 2], "a", ["one", "two"]));               // [ 1, 2, "a", "one", "two" ]
// console.log(concat([1, 2], ["three"], 4));                      // [ 1, 2, "three", 4 ]

// *****************************

// function pop(arr) {
//   if (arr.length === 0) {
//     return undefined
//   }

//   var removedElement = arr[arr.length - 1];
//   arr.splice(-1);

//   return removedElement;
// }

// function push(array) {
//   for (var i = 1; i < arguments.length; i++) {
//     array[array.length] = arguments[i];
//   }
//   return array.length;
// }

// var array = [1, 2, 3];
// console.log(pop(array));                   // 3
// console.log(array);           // [1, 2]
// console.log(pop([]));                      // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']])); // [ 'a', 'b', 'c' ]

// var array = [1, 2, 3];
// console.log(push(array, 4, 5, 6));         // 6
// console.log(array);           // [1, 2, 3, 4, 5, 6]
// console.log(push([1, 2], ['a', 'b']));     // 3
// console.log(push([], 1));                  // 1
// console.log(push([]));                     // 0

// ******************************

// function reverse(inputForReversal) {
//   var reversed = [];

//   for (var i = inputForReversal.length - 1; i >= 0; i--) {
//     reversed.push(inputForReversal[i]);
//   }

//   if (!Array.isArray(inputForReversal)) {
//     reversed =  reversed.join('');
//   }
//   return reversed;
// }

// console.log(reverse('Hello'));          // olleH
// console.log(reverse('a'));              // a
// console.log(reverse([1, 2, 3, 4]));     // [4, 3, 2, 1]
// console.log(reverse([]));               // []

// **************************

// function shift(array) {
//   var firstElement = array.splice(0, 1).pop();
//   return firstElement;
// }

// function unshift(array, element) {
//   for (var i = 1; i < arguments.length; i++) {
//     array.splice(i - 1, 0, arguments[i]);
//   }

//   return array.length
// }


// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4 ,5]));        // [1, 2, 3]

// console.log(unshift([1, 2, 3], 5, 6));        // 5
// console.log(unshift([1, 2, 3]));              // 3
// console.log(unshift([4, 5], [1, 2 ,3]));      // 3

// var testArray = [1, 2, 3];
// console.log(shift(testArray));                // 1
// console.log(testArray);                       // [2, 3]
// console.log(unshift(testArray, 5, 7));           // 3
// console.log(testArray);                       // [5, 2, 3]

//***********************

// function slice(array, begin, end) {
//   var newArray = [];
//   var arrayLength = array.length

//   begin = begin > arrayLength ? arrayLength : begin;
//   end = end > arrayLength ? arrayLength : end;

//   for (var i = begin; i < end; i++) {
//     newArray.push(array[i]);
//   }

//   return newArray;
// }

// console.log(slice([1, 2, 3], 1, 2));           // [2]
// console.log(slice([1, 2, 3], 2, 0));           // []
// console.log(slice([1, 2, 3], 5, 1));           // []

// var arr = [1, 2, 3];
// console.log(slice(arr, 1, 3));                 // [2, 3]
// console.log(arr);                              // [1, 2, 3]


function splice(array, start, deleteCount) {
  start = start > arrayLength ? arrayLength : start;
  deleteCount = deleteCount > (arrayLength - start) ? arrayLength - start : deleteCount;

  var deletedElements = array.slice(start, start + deleteCount)
  var arrayLength = array.length;
  var itemsToAddCount = arguments.length - 3;
  var newArrayLength = array.length + itemsToAddCount - deleteCount;

  for (var i = start; i < array.length; i++) {
    array[i] = array[i + deleteCount];
  }

  if (itemsToAddCount > 0) {
    for (var i = newArrayLength; i > start; i--) {
      array[i] = array[i - 1];
    }

    for (var j = 3; j < arguments.length; j++){
      array[start] = arguments[j];
      start += 1;
    }
  }
  
  array.length = newArrayLength;
  // console.log(array);
  return deletedElements;
}

var tstArr = [1, 2, 3, 4];

// console.log(splice(tstArr, 1, 2));         // [2, 3]

// console.log(splice([1, 2, 3], 1, 2));                   // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));                   // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));                   // []
// console.log(splice([1, 2, 3], 0, 1));                   // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));               // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));                  // [2]
console.log(arr);                                       // [1, 'two', 3];

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));          // [2 ,3]
console.log(arr);                                       // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                         // []
console.log(splice(arr, 1, 0, 'a'));                    // []
console.log(arr);                                       // [1, 'a', 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));                    // []
console.log(arr);                                       // ['a', 1, 2, 3]
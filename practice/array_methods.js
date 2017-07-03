function lastInArray(array) {
  return array[array.length - 1];
}

// console.log(lastInArray([1, 2, 3])) // 3
// console.log(lastInArray(['a'])) // a

function rollCall(nameArray) {
  for (var i = 0; i < nameArray.length; i++) {
    console.log(nameArray[i]);
  }
}

// var names = ['Abby', 'Mark', 'Sam', 'John'];
// rollCall(names);

function reverseArray(arr) {
  reversedArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

function findFirstInstance(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] ===  value) {
      return i;
    }
  }
  return -1;
}

// console.log(findFirstInstance(2, [1, 2, 3, 4, 5, 2])) // 1

// console.log(findFirstInstance('a', ['z', 3, 5, 'e', 9, 'a'])) // 5

function deconstuctArray(array) {
  var convertedStr = '';
  for (var i = 0; i < array.length; i++) {
    convertedStr += String(array[i]);
  }
  return convertedStr;
}

// console.log(deconstuctArray(['a', 2, 5, 'f'])) // 'a25f'

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

// var count = [1, 2, 3];
// console.log(push(count, 4));   // 4
// console.log(count);            // [ 1, 2, 3, 4 ]


function pop(array) {
  newLength = array.length - 1;
  value = array[newLength];
  array.length = newLength;
  return value;
}

// array = [1, 2, 3, 4];
// console.log(pop(array)); // 4
// console.log(array); /// [1, 2, 3]

function unshift(array, value) {
  for (var i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = value;

  return array.length;
}

// var count = [1, 2, 3];
// console.log(unshift(count, 0));        // 4
// console.log(count);                    // [ 0, 1, 2, 3 ]

function shift(array) {
  value = array[0];

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return value;
}

// var count = [1, 2, 3];
// console.log(shift(count));           // 1
// console.log(count);                  // [ 2, 3 ]

function indexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1

function lastIndexOf(array, value) {
  for (var i = array.length -1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

// console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
// console.log(lastIndexOf([1, 2, 3], 4));        // -1

function slice(array, start, end) {
  var newArray = [];
  // var idx = 0;
  for (var i = start; i < end; i++) {
    // newArray[idx] = array[i];
    // idx++;
    push(newArray, array[i]);
  }
  return newArray;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                         // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));     // [ 'b', 'c' ])

function splice(array, start, number) {
  newArray = slice(array, start, start + number);

  for (var i = start; i <= start + number; i++) {
    array[i] = array[i + number];
  }

  array.length = array.length - number;
  return newArray;
}

// var count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));        // [ 3, 4, 5, 6, 7 ]
// console.log(count);                      // [ 1, 2, 8]

function concat(array1, array2) {
  var newArray = [];

  for (var i = 0; i < array1.length; i++) {
    push(newArray, array1[i]);
  }

  for (var j = 0; j < array2.length; j++) {
    push(newArray, array2[j]);
  }

  return newArray;
}

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ])

function join(array, separator) {
  var joinedString = '';

  for (var i = 0; i < array.length; i++) {
    joinedString += String(array[i]);


    if (i < array.length - 1) {
      joinedString += separator
    } 
  }
  return joinedString;
}

// console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
// console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'

function arraysEqual(array1, array2) {
  longestArr = array1.length > array2.length ? array1.length : array2.length;
  
  for (var i = 0; i < longestArr; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false
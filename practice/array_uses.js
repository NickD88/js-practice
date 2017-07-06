function firstElementOf(arr) {
  return arr[0];
}

// console.log(firstElementOf(['U', 'S', 'A'])); // Returns "U"


function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// console.log(lastElementOf(['U', 'S', 'A'])); // Returns "A"



function nthElementOf(arr, index) {
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];

// console.log(nthElementOf(digits, 3)); // Returns 16
// console.log(nthElementOf(digits, 8)); // undefined
// console.log(nthElementOf(digits, -1)); // undefined

function firstNOf(arr, count) {
  // var newArray = [];

  // for (var i = 0; i < count; i++) {
  //   newArray[i] = arr[i];
  // }
  // return newArray;
  return arr.slice(0, count);
}

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3)); // Returns [4, 8, 15]

function lastNOf(arr, count) {
  if (count > arr.length) {
    count = arr.length;
  }

  return arr.slice(arr.length - count);
}

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 3)); // Returns [16, 23, 42]
// console.log(lastNOf(digits, 33)); // Returns [4, 8, 15, 16, 23, 42]

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

// console.log(endsOf([4, 8, 15], [16, 23, 42])); // Returns [4, 42]


function oddElementsOf(arr) {
  var newArr = [];

  for (var i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

var digits = [4, 8, 15, 16, 23, 42];

// console.log(oddElementsOf(digits)); // Returns [8, 16, 42]

function combinedArray(even, odd) {
  var newArr = [];

  for (var i = 0; i < even.length; i++) {
    newArr.push(even[i], odd[i]);
  }

  return newArr;
}

// var digits = [4, 8, 15, 16, 23, 42];
// var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

// console.log(combinedArray(digits, letters)); // Returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]

function mirroredArray(arr) {
  // var upDownArr = [];

  // for (var i = 0; i < arr.length; i++) {
  //   upDownArr.push(arr[i]);
  // }
  
  // for (var i = arr.length - 1; i >= 0; i--) {
  //   upDownArr.push(arr[i]);
  // }
  // return upDownArr;

  return arr.concat(arr.slice().reverse());
}

// console.log(mirroredArray([1, 2, 3, 4, 5])); // returns [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];


function sortDescending(arr) {
  return arr.slice().sort(function(a, b) {
    return b - a;
  })
}

// var array = [23, 4, 16, 42, 8, 15];
// var result = sortDescending(array); // Returns [42, 23, 16, 15, 8, 4]
// console.log(result);   // Logs [42, 23, 16, 15, 8, 4]
// console.log(array);    // Logs [23, 4, 16, 42, 8, 15])


function matrixSums(arr) {
  sumedArr = [];

  for (var i = 0; i < arr.length; i++) {
    var sum = 0;

    for (var j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    sumedArr.push(sum);
  }
  return sumedArr;
}

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]])); // Returns [15, 60, 12]


function uniqueElements(arr) {
  uniqueArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (uniqueArray.includes(arr[i])) {
      continue;
    } else {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

// console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4])); // Returns [1, 2, 4, 3, 5]



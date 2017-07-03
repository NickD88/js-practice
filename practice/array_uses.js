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
  return arr.slice(arr.length - count);
}

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 3)); // Returns [16, 23, 42]
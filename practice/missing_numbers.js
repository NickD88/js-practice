function missing(arr) {
  missingNumbers = [];

  for (var i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (arr.indexOf(i) === -1) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
}



console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []

// create a new returned array
// create a for loop starting with the 0 index value of the array
// if the loop incrementor is in the array, continue
// else add that number to the array
// end the for loop at the last index's value
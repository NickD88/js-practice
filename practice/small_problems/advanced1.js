// Madlibs Revisited

var template1 =
  "The {adjective} brown {noun} {adverb} " +
  "{verb} the {adjective} yellow " +
  "{noun}, who {adverb} {verb} his " +
  "{noun} and looks around.";

var template2 = "The {noun} {verb} the {noun}'s {noun}.";

function madlibs(template) {
  var partOfSpeach = {
    noun: ["crowd", "fork", "guitar", "twig", "smoke", "stamp"],
    verb: ["turn", "deceive", "force", "bang", "scare", "launch", "whisper"],
    adjective: [
      "husky",
      "seemly",
      "abundant",
      "damp",
      "glorius",
      "victorious",
      "uselss",
      "busy"
    ],
    adverb: ["sweetly", "scarcely", "exactly", "definitely", "terribly"],
    getRandom: function(match) {
      var wordType = match.replace(/[^a-z]/gi, "");
      return partOfSpeach[wordType][
        Math.floor(Math.random() * wordType.length)
      ];
    }
  };

  return template.replace(/{\w+}/g, partOfSpeach.getRandom);
}

// console.log(madlibs(template1));

// // The "sleepy" brown "cat" "noisily"
// // "licks" the "sleepy" yellow
// // "dog", who "lazily" "licks" his
// // "tail" and looks around.

// console.log(madlibs(template1));

// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.

// console.log(madlibs(template2));

// // The "fox" "bites" the "dog"'s "tail".

// console.log(madlibs(template2));

// // The "cat" "pats" the "cat"'s "head".

// Transpose 3x2

function transpose(matrixArr) {
  var transposed = [];
  for (var row = 0; row < matrixArr[0].length; row++) {
    transposed.push([]);
    for (var col = 0; col < matrixArr.length; col++) {
      transposed[row][col] = matrixArr[col][row];
    }
  }
  return transposed;
}

// var matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// var newMatrix = transpose(matrix);

// console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);    // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// console.log(transpose([[1, 2, 3, 4]]));       // [[1], [2], [3], [4]]
// console.log(transpose([[1], [2], [3], [4]])); // [[1, 2, 3, 4]]
// console.log(transpose([[1]]));                // [[1]]
// console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

// Rotating Matricies

function rotate90(matrix) {
  var rotated = [];
  for (var row = 0; row < matrix[0].length; row++) {
    rotated.push([]);
    for (var col = 0; col < matrix.length; col++) {
      rotated[row][col] = matrix[matrix.length - (col + 1)][row];
    }
  }
  return rotated;
}

var matrix1 = [[1, 5, 8], [4, 7, 2], [3, 9, 6]];

// 3, 4, 1
// 9, 7, 5
// 6, 2, 8

// var matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8]
// ];

// var newMatrix1 = rotate90(matrix1);
// var newMatrix2 = rotate90(matrix2);
// var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3); // matrix2

// MErge Sorted List

function merge(arrA, arrB) {
  var result = [];
  var idxA = 0;
  var idxB = 0;

  if (arrA.length === 0) {
    return arrB;
  } else if (arrB.length === 0) {
    return arrA;
  }

  while (idxA < arrA.length && idxB < arrB.length) {
    var elementA = arrA[idxA];
    var elementB = arrB[idxB];

    if (elementA <= elementB) {
      result.push(elementA);
      idxA += 1;
    } else {
      result.push(elementB);
      idxB += 1;
    }
  }

  while (idxA < arrA.length) {
    result.push(arrA[idxA]);
    idxA += 1;
  }

  while (idxB < arrB.length) {
    result.push(arrB[idxB]);
    idxB += 1;
  }


  return result;
}

// console.log(merge([1, 5, 9], [2, 6, 8])); // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2])); // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 4, 5])); // [1, 4, 5]
// console.log(merge([1, 4, 5], [])); // [1, 4, 5]
// console.log(merge([1, 1, 3], [2])); // [1, 2, 1, 3]


// Merge Sort List

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);

  var firstHalf = mergeSort(arr.slice(0, mid));
  var secondHalf = mergeSort(arr.slice(mid));

  return merge(firstHalf, secondHalf);
}

// console.log(mergeSort([9, 5, 7, 1]));                // [1, 5, 7, 9]
// console.log(mergeSort([5, 3]));                      // [3, 5]
// console.log(mergeSort([6, 2, 7, 1, 4]));             // [1, 2, 4, 6, 7]
// console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// // ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']
// console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]



// Binary Search

function binarySearch(list, item) {
  var lowIdx = 0;
  var highIdx = list.length - 1;
  var middle;
  var searchElement;

  while (lowIdx <= highIdx) {
    middle = lowIdx + Math.floor((highIdx - lowIdx) / 2);
    searchElement = list[middle];

    if (item === searchElement) {
      return middle;
    } else if (item > searchElement) {
      lowIdx = middle + 1;
    } else {
      highIdx = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));                                // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));                                // 7
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter')); // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler')); // 6

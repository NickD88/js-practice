// Madlibs Revisited

var template1 = 'The {adjective} brown {noun} {adverb} ' +
                '{verb} the {adjective} yellow ' +
                '{noun}, who {adverb} {verb} his ' +
                '{noun} and looks around.';

var template2 = 'The {noun} {verb} the {noun}\'s {noun}.'


function madlibs(template) {
  var partOfSpeach = {
    noun : ['crowd', 'fork', 'guitar', 'twig', 'smoke', 'stamp'],
    verb : ['turn', 'deceive', 'force', 'bang', 'scare', 'launch', 'whisper'],
    adjective : ['husky', 'seemly', 'abundant', 'damp', 'glorius', 'victorious', 'uselss', 'busy'],
    adverb : ['sweetly', 'scarcely', 'exactly', 'definitely', 'terribly'],
    getRandom : function(match) {
      var wordType = match.replace(/[^a-z]/gi, '');
      return partOfSpeach[wordType][(Math.floor(Math.random() * wordType.length))];
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


var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

// console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);    // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// console.log(transpose([[1, 2, 3, 4]]));       // [[1], [2], [3], [4]]
// console.log(transpose([[1], [2], [3], [4]])); // [[1, 2, 3, 4]]
// console.log(transpose([[1]]));                // [[1]]
// console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
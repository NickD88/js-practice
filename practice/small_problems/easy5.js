// // Double Char part 1
// function repeater(str) {
//   var repeatedStr = '';
//   str.split('').forEach(function(letter) {
//     repeatedStr += letter.repeat(2);
//   });
//   return repeatedStr;
// }


// console.log(repeater('Hello'));     // "HHeelllloo"
// console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
// console.log(repeater(''));          // ''


// Dougle Char Part 2

function doubleConsonants(str) {
  var doubledStr = '';
  var consinents = 'bcdfghjklmnpqrstvwxyz'.split('');

  str.split('').forEach(function(letter) {
    if (consinents.indexOf(letter) !== -1) {
      doubledStr += letter.repeat(2);
    } else {
      doubledStr += letter;
    }
  });
  return doubledStr;
}


console.log(doubleConsonants('String'));       // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));     // "JJullyy 4tthh"
console.log(doubleConsonants(''));             // ""
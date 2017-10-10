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

// function doubleConsonants(str) {
//   var doubledStr = '';
//   var consinents = 'bcdfghjklmnpqrstvwxyz'.split('');

//   str.split('').forEach(function(letter) {
//     if (consinents.indexOf(letter) !== -1) {
//       doubledStr += letter.repeat(2);
//     } else {
//       doubledStr += letter;
//     }
//   });
//   return doubledStr;
// }


// console.log(doubleConsonants('String'));       // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));     // "JJullyy 4tthh"
// console.log(doubleConsonants(''));             // ""

// Convert Number to Reversed array of Digits


// function reversedNumber(num) {
//   var reversed =  String(num).split('').reverse().join('');
//   return parseInt(reversed, 10);
// }

// console.log(reversedNumber(12345)); // 54321
// console.log(reversedNumber(12213)); // 31221
// console.log(reversedNumber(456));   // 654
// console.log(reversedNumber(12000)); // 21 # Note that zeros get dropped!
// console.log(reversedNumber(1));     // 1


// Get the Middle Character

// function centerOf(str) {
//   var letterArr = str.split('');
//   var middleIdx = Math.floor(str.length / 2);
//   var middleLetters = '';

//   if (str.length % 2 === 0) {
//     middleLetters += (letterArr.splice((middleIdx - 1), 2)).join('');
//   } else {
//     middleLetters += letterArr[middleIdx];
//   }

//   return middleLetters;
// }

// console.log(centerOf('I love ruby'));    // 'e'
// console.log(centerOf('Launch School'));  // ' '
// console.log(centerOf('Launch'));         // 'un'
// console.log(centerOf('Launchschool'));   // 'hs'
// console.log(centerOf('x'));              // 'x'


// Always Return Negative

// function negative(num) {
//   return num < 0 ? num : -Math.abs(num);
// }
// console.log(negative(5));  // -5
// console.log(negative(-3)); // -3
// console.log(negative(0));  // -0


// Counting up
// function sequence(num) {
//   var numArr = [];
//   for (var i = 1; i <= num; i++) {
//     numArr.push(i);
//   }
//   return numArr;
// }

// console.log(sequence(5)); // [1, 2, 3, 4, 5]
// console.log(sequence(3)); // [1, 2, 3]
// console.log(sequence(1)); // [1]


// Name Swapping


// function swapName(name) {
//   return name.split(' ').reverse().join(', ');
// }

// console.log(swapName('Joe Roberts')); // 'Roberts, Joe'


// Sequence Count

// function sequence(count, startNum) {
//   return Array(count).fill(startNum).map(function(num, idx) {
//     return num * (idx + 1);
//   });
// }

// console.log(sequence(5, 1));       // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));      // [-7, -14, -21, -28]
// console.log(sequence(3, 0));       // [0, 0, 0]
// console.log(sequence(0, 1000000)); // []

// Reverse It Pt 1

// function reverseSentence(sentence) {
//   return sentence.split(' ').reverse().join(' ');
// }

// console.log(reverseSentence(''));                     // ''
// console.log(reverseSentence('Hello World'));          // 'World Hello'
// console.log(reverseSentence('Reverse these words'));  // 'words these Reverse'


// Reverse it Pt 2

// function reverseWords(sentence) {
//   var wordArr = sentence.split(' ');
//   return wordArr.map(function(word) {
//     if (word.length >= 5) {
//       return word.split('').reverse().join('');
//     } else {
//       return word;
//     }
//   }).join(' ');
// }

// console.log(reverseWords('Professional'));          // lanoisseforP
// console.log(reverseWords('Walk around the block')); // Walk dnuora the kcolb
// console.log(reverseWords('Launch School'));         // hcnuaL loohcS
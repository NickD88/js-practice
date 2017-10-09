// // Ddaaiillyy ddoouubbllee

// function crunch(str) {
//   // var formattedStr = '';
//   // for (var i = 0; i < str.length; i++) {
//   //   if (str[i] !== str[i + 1]) {
//   //     formattedStr += str[i];
//   //   }
//   // }
//   // return formattedStr;

//   return str.replace(/(\w)\1+/g, '$1');
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));        // 'daily double'
// console.log(crunch('4444abcabccba'));                  // '4abcabcba'
// console.log(crunch('ggggggggggggggg'));                // 'g'
// console.log(crunch('a'));                              // 'a'
// console.log(crunch(''));                               // ''

// bannerizer

// function logInBox(phrase) {
//   var numDashes = phrase.length + 2;
//   console.log('+' + '-'.repeat(numDashes) + '+');
//   console.log('|' + ' '.repeat(numDashes) + '|');
//   console.log('| ' + phrase + ' |');
//   console.log('|' + ' '.repeat(numDashes) + '|');
//   console.log('+' + '-'.repeat(numDashes) + '+');
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');
// logInBox('To boldly go where no one has gone before. Test longer string.');

// stringy strings

// function stringy(num) {
//   var output = '';
//   for (var i = 0; i < num; i++) {
//     output += i % 2 === 0 ? '1' : '0';
//   }
//   console.log(output);
// }

// stringy(6) // '101010'
// stringy(9) // '101010101'
// stringy(4) // '1010'
// stringy(7) // '1010101'

// function findFibonacciIndexByLength(digits) {
//   var sequence = [1, 1];
//   while (sequence[sequence.length - 1].toString().length < digits) {
//     sequence.push(findFibonacci(sequence));
//   }
//   return sequence.length;
// }

// function findFibonacci(sequence) {
//   return sequence[sequence.length -1] + sequence[sequence.length - 2];
// }

// console.log(findFibonacciIndexByLength(2));     // 7
// console.log(findFibonacciIndexByLength(10));    // 45
// console.log(findFibonacciIndexByLength(16));    // 74

// RIGHT TRIANGLES

// function triangle(num) {
//   var output = [];
//   for (var i = 1; i <= num; i++) {
//     output.push(' '.repeat(num - i) + '*'.repeat(i));
//   }
//   return output.join('\n');
// }

// console.log(triangle(5));

// //     *
// //    **
// //   ***
// //  ****
// // *****

// console.log(triangle(9));

// //         *
// //        **
// //       ***
// //      ****
// //     *****
// //    ******
// //   *******
// //  ********
// // *********

// MADlibs

// function promptUser(wordType) {
//   return prompt('Enter a ' + wordType + ':');
// }

// function madlibs() {
//   var noun = promptUser('noun');
//   var verb = promptUser('verb');
//   var adjective = promptUser('adjective');
//   var adverb = promptUser('adverb');

//   console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}?  That's hilarious!`)
// }

// madlibs();

// DOUBLE DOUBLES

// function twice(num) {
//   if (String(num).length % 2 === 0 && mirrorSides(num)) {
//     return num;
//   } else {
//     return num *= 2;
//   }
// }

// function mirrorSides(number) {
//   var numStr = String(number);
//   var firstHalf = numStr.slice(0, numStr.length / 2);
//   var secondHalf = numStr.slice(numStr.length / 2);
//   return firstHalf === secondHalf;
// }

// console.log(twice(37));                 // 74
// console.log(twice(44));                 // 44
// console.log(twice(334433));             // 668866
// console.log(twice(444));                // 888
// console.log(twice(107));                // 214
// console.log(twice(103103));             // 103103
// console.log(twice(3333));               // 3333
// console.log(twice(7676));               // 7676

// GRADE BOOK

// function getGrade(s1, s2, s3) {
//   var average = (s1 + s2 + s3) / 3;
//   var letterGrade;

//   if (average >= 90) {
//     letterGrade = 'A';
//   } else if (average >= 80) {
//     letterGrade = 'B';
//   } else if (average >= 70) {
//     letterGrade = 'C';
//   } else if (average >= 60) {
//     letterGrade = 'D';
//   } else {
//     letterGrade = 'F';
//   }
//   return letterGrade;
// }

// console.log(getGrade(95, 90, 93)) // "A"
// console.log(getGrade(50, 50, 95)) // "D"

// CLEAN UP THE WORDS

// function cleanUp(str) {
//   return str.replace(/[^a-z]+/gi, ' ');
// }

// console.log(cleanUp('---what\'s my +*& line?'));      // ' what s my line '

// WHAT CENTURY

function century(year) {
  var century = Math.ceil(year / 100);
  return appendEnding(century);
  // 1st 2nd 3rd 4th
}

function appendEnding(number) {
  var numStr = String(number);
  var ending;
  if (["11", "12", "13"].indexOf(numStr.slice(-2)) !== -1) {
    return numStr + "th";
  }
  switch (numStr.slice(-1)) {
    case "1":
      ending = "st";
      break;
    case "2":
      ending = "nd";
      break;
    case "3":
      ending = "rd";
      break;
    default:
      ending = "th";
  }

  return numStr + ending;
}

console.log(century(2000)); // '20th'
console.log(century(2001)); // '21st'
console.log(century(1965)); // '20th'
console.log(century(256)); // '3rd'
console.log(century(5)); // '1st'
console.log(century(10103)); // '102nd'
console.log(century(1052)); // '11th'
console.log(century(1127)); // '12th'
console.log(century(11201)); // '113th'

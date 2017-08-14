// var myBoolean = true;
// var myString = 'hello';
// var myArray = [];
// var myOtherString = '';

// if (myBoolean) {
//   console.log('Hello');  // logs hello
// }

// if (!myString) {
//   console.log('World'); // does not log anything
// }

// if (!!myArray) {
//   console.log('World'); // logs World
// }

// if (myOtherString || myArray) {
//   console.log('!');  // logs !
// }

// // ************

// var number1 = parseInt(prompt('Enter the first number:'), 10);
// var number2 = parseInt(prompt('Enter the second number:'), 10);


// console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
// console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
// console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
// console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
// console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
// console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));

// ********

// Please write a phrase: walk
// // console output
// There are 4 characters in "walk".

// Please write a phrase: walk, don't run
// // console output
// There are 15 characters in "walk, don't run".

// var phrase = prompt('Please write a phrase');
// var phraseNoSpaces = phrase.replace(/[^A-Za-z]/g,'');

// console.log('There are ' + phraseNoSpaces.length + ' characters in \"' + phraseNoSpaces + '\".') 

// var DIGITS = {'1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 0}

// function stringToInteger(str) {
//     var output = 0
//     var digits = digitArray(str);  

//     for (var i = 0; i < digits.length; i++) {
//       output = (10 * output) + digits[i]
//     }

//     return output;
// }

// function digitArray(str) {
//   arrOutput = [];

//   for (var i = 0; i < str.length; i++) {
//     arrOutput.push(DIGITS[str[i]]);
//   }
//   return arrOutput;
// }

// console.log(stringToInteger('4321'));          // 4321
// console.log(stringToInteger('570'));           // 570

// ***************

// function stringToSignedInteger(str) {
//   var negNum = false;
//   var signedOutput;

//   if (str[0] === '-') {
//     negNum = true;
//     signedOutput = stringToInteger(str.slice(1));
//   } else if (str[0] === '+') {
//     signedOutput = stringToInteger(str.slice(1));
//   } else {
//     signedOutput = stringToInteger(str);
//   }

//   if (negNum) {
//     signedOutput *= -1;
//   }

//   return signedOutput;
// }

// console.log(stringToSignedInteger('4321'));      // 4321
// console.log(stringToSignedInteger('-570'));      // -570
// console.log(stringToSignedInteger('+100'));      // 100

DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  var strOutput = ''
  var remainder;
  
  do {
    remainder = number % 10;
    number = Math.floor(number / 10);

    strOutput = DIGITS[remainder] + strOutput;

  } while (number > 0);

  return strOutput;
}

// console.log(integerToString(4321));    // "4321"
// console.log(integerToString(0));       // "0"
// console.log(integerToString(5000));    // "5000"


function signedIntegerToString(number) {
  var prefix = '';
  var outputStr;

  if (number < 0) {
    prefix = '-'
    outputStr = integerToString(number * - 1);
  } else if (number === 0) {
    outputStr = integerToString(number);
  } else {
    prefix = '+'
    outputStr = integerToString(number);
  }

  return prefix + outputStr;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"


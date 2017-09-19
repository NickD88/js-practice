// ** Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

// for (var i = 1; i <= 99; i += 2) {
//   console.log(i);
// }

// function logOdd(numberLimit) {
//   var i = 1;
//   while (i <= numberLimit) {
//     console.log(i);
//     i += 2;  
//   }
// }

// logOdd(200);

// ** Log the even numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

// for (var i = 2; i <= 99; i += 2) {
//   console.log(i);
// }

// ** How Big is the Room (refactor functions)

// var inputType = prompt('Please enter the input type: \'f\' for feet | \'m\' for meters.').toLowerCase();
// var length = parseInt(prompt('Enter the length of the room in meters:'), 10);
// var width = parseInt(prompt('Enter the width of the room in meters'),10);
// var lengthType = inputType === 'f' ? 'feet' : 'meters';
// var conversionType = inputType === 'f' ? 'meters' : 'feet';
// var area = length * width;
// var conversion;

// if (inputType === 'f') {
//   conversion = area * 10.7639; 
// } else if (inputType === 'm') {
//   conversion = area;
//   area *= 10.7639;
// }

// console.log('The area of the room is ' + area.toFixed(1) +
//       ' square ' + lengthType +  '(' + conversion.toFixed(2) + ' square ' +
//       conversionType + ').')

// ** Tip Calculator

// var billAmount = parseFloat(prompt('What is the bill?'));
// var tipPercentage = parseFloat(prompt('What is the tip percentage?'));
// var totalBill;
// var tip;

// tip = billAmount * tipPercentage / 100;
// totalBill = billAmount + tip;

// console.log('The tipe is $' + tip.toFixed(2));
// console.log('The total is $' + totalBill.toFixed(2));

// ** Sum or Product of Consecutive Integers

// function sumOrProduct(number, operand) {
//   var sum = 0;
//   for (var i = 1; i <= number; i++) {
//     if (operand === 's') {
//       sum += i;
//     } else {
//       if (sum === 0) {sum = 1};
//       sum *= i;
//     }
//   }
//   return sum;
// }

// function sumOrProduct(numArray, operand) {
//   var total;
//   if (operand === 's') {
//     total = numArray.reduce(function(sum, value) {
//       return sum += value;
//     });
//   } else {
//     total = numArray.reduce(function(product, value) {
//       return product *= value;
//     });
//   }
//   return total;
// }

// function validOperator(input) {
//   return input === 'p' || input === 's'
// }

// function validNumber(num) {
//   return num >= 0;
// }

// function getUserInput() {
//   var usrNumber, usrOperator;
//   var numArray = [1, 2, 3, 4, 5, 6];

//   usrNumber = parseInt(prompt('Please enter a number greater then 0'), 10);
//   while (!validNumber(usrNumber)) {
//     usrNumber = prompt('Sorry, incorrect entry.  Please enter a valid number greater then 0');
//   }

//   usrOperator = prompt('Enter "s" to compute the sum, "p" to computer the product').toLowerCase();
//   while (!validOperator(usrOperator)) {
//     usrOperator = prompt('Invalid Entry! Enter "s" to compute the sum, "p" to computer the product').toLowerCase();
//   }
//   return sumOrProduct(numArray, usrOperator);
// }

// console.log(getUserInput());

// SHORT LONG SHORT

// function shortLongShort(str1, str2) {
//   var shortStr = str1.length > str2.length ? str2 : str1;
//   var longStr = str1.length > str2.length ? str1 : str2;
//   return shortStr + longStr + shortStr;
// }


// console.log(shortLongShort('abc', 'defgh'));   // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));   // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));        // "xyz"

// LEap Years PT 1

// function isLeapYear(year) {
//   year % 4 === 0  && (year % 400 === 0 || year % 100 !== 0)
// }

// isLeapYear(2016);     // true
// isLeapYear(2015);     // false
// isLeapYear(2100);     // false
// isLeapYear(2400);     // true
// isLeapYear(240000);   // true
// isLeapYear(240001);   // false
// isLeapYear(2000);     // true
// isLeapYear(1900);     // false
// isLeapYear(1752);     // true
// isLeapYear(1700);     // false
// isLeapYear(1);        // false
// isLeapYear(100);      // false
// isLeapYear(400);      // true


// Leap Year PT 2

// function isLeapYear(year) {
//   if (year <= 1752) {
//     return year % 4 === 0;
//   } else {
//     return year % 4 === 0  && (year % 400 === 0 || year % 100 !== 0)  
//   }
// }

// console.log(isLeapYear(2016));     // true
// console.log(isLeapYear(2015));     // false
// console.log(isLeapYear(2100));     // false
// console.log(isLeapYear(2400));     // true
// console.log(isLeapYear(240000));   // true
// console.log(isLeapYear(240001));   // false
// console.log(isLeapYear(2000));     // true
// console.log(isLeapYear(1900));     // false
// console.log(isLeapYear(1752));     // true
// console.log(isLeapYear(1700));     // true
// console.log(isLeapYear(1));        // false
// console.log(isLeapYear(100));      // true
// console.log(isLeapYear(400));      // true


//  Multiples of 3 and 5

// function multisum(num) {
//   sum = 0;
//   for (var i = 1; i <= num; i++) {
//     if (i % 5 === 0 || i % 3 === 0) { sum += i };
//   }
//   return sum;
// }

// console.log(multisum(3));      // 3
// console.log(multisum(5));      // 8
// console.log(multisum(10));     // 33
// console.log(multisum(1000));   // 234168


// ASCII String Value

function asciiValue(string) {
  return string.split('').reduce(function(sum, value) {
    return sum += value.charCodeAt();
  }, 0);
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
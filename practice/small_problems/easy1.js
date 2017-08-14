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

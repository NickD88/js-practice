/*
numbers always increasing
1, 3, 7, 2, 4, 1 = 1,3,7,12,14,21
seperators: '-' ':' '..'

input: a string of numbers seperated by one of the 3 seperator characters
output: array of transfored numbers in assending order

Rules:
 * numbers are kept in place but transformed so they are always assending
 * input number are the numbers all the way to the right (ones place) of the transformed number
 * input numbers can be seperated by any of the 3 seperation characters
  - input can use any combination of the 3 seperators in each string of numbers
  - if input number is a range ('..') include all digits in the range (ie (1..3 == 1:2:3)
 * deal with empty inputs or non number inputs?
 * 
 
 Algorighm
 - seperate input string on ',' to segregate the ranges from incrementing numbers
 




*/

function increasingNumbers(numStr) {
  var output = [];
  var highestNum;
  var numList = numStr.split(',').map(function(num) {
    if (num.match(/[\:|\.\.|\-]+/)) {
    return convertIncrementingNumbers(num);
   } else {
    return num;
  }}).join(',');
  numList.split(',').forEach(function(number, idx) {
    if (number < output[idx - 1]){
      output.push(findNextNum(output[idx - 1], number));
    } else {
      output.push(number)
    }
  });
  return output;
}

function convertIncrementingNumbers(lastNum, numStr) {
  var outputArr = [];
  var numArr = numStr.split(/[\:|\.\.|\-]+/)
  // .map(function(num) {
  //   return parseInt(num, 10);
  // });
  numArr.forEach(function(num, idx) {
    if (num < outputArr[idx - 1]) {
      outputArr.push(findNextNum(outputArr[idx - 1], num));
    } else {
      outputArr.push(num)
    }
  });
  return expandRange(outputArr);
}

function findNextNum(currentNum, numStr) {
  var power = numStr.length
  var num = parseInt(numStr, 10);
  while (num <= currentNum) {
     num += Math.pow(10, power);
  } 
  return num;
}

function expandRange(array) {
  var firstNum = array[0];
  var lastNum = array[array.length -1];
  var idx = 0;
  var output = [];
  for (var i = firstNum; i <= lastNum; i++) {
    output.push(i);
  }
  return output;
}

// console.log(increasingNumbers('1,3,7,2,4,1'));  // [1, 3, 7, 12, 14, 21]
// console.log(increasingNumbers('1:3:7:2:4:1'));      // [1, 3, 7, 12, 14, 21]
// console.log(increasingNumbers('1..3..7..2..4..1')); // [1, 3, 7, 12, 14, 21]
console.log(increasingNumbers('101,04..02')); // [101, 104 through 202]
// console.log(increasingNumbers('545,64-11')); // [545, 564 through 611]
// console.log(increasingNumbers('1-5-2')); // [1 through 12]

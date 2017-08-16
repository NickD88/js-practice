function octalToDecimal(number) {
  numArray = number.split('').map(function(num) {
    return parseInt(num, 10);
  }).reverse();
  
  var convertedNumbers = numArray.map(function(number, idx) {
    return number * Math.pow(8, idx);  
  });
  
  return convertedNumbers.reduce(function(total, entry) {
    return total + entry;
  },0);
}

// function octalToDecimal(numberString) {
//   return numberString.split('').reduce(function(sum, digitChar, index) {
//     return sum + Number(digitChar) * Math.pow(8, numberString.length - index -1);
//   }, 0);
// }

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

// split each string into an array of single digits converted to numbers
// transform each octal element in array to decimal value
// reduce the array adding all elements together
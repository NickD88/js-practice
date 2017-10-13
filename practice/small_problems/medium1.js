// // Rotation Part 1

function rotateArray(arr) {
  var rotatedArr = [];
  if (Array.isArray(arr) === false) { return; }
  if (arr.length === 0) { return arr; }
  for (var i = 1; i < arr.length; i++) {
    rotatedArr.push(arr[i]);
  }
  rotatedArr.push(arr[0]);
  return rotatedArr;
}

// console.log(rotateArray(['a', 'b', 'c']));      // ['b', 'c', 'a']
// console.log(rotateArray([7, 3, 5, 2, 9, 1]))   // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a']));                // ['a']
// console.log(rotateArray([1, 'a', 3, 'c']));    // [ 'a', 3, 'c', 1 ]
// console.log(rotateArray([{a: 2}, [1, 2], 3])); // [ [1, 2], 3, {a: 2} ]
// console.log(rotateArray([]))                   // []

// // return undefined if the argument is not an array
// console.log(rotateArray());                    // undefined
// console.log(rotateArray(1));                   // undefined


// // the input array is not mutated
// x = [1, 2, 3, 4]
// console.log(rotateArray(x))                 // [2, 3, 4, 1]
// console.log(x)                  // [1, 2, 3, 4]


// Rotation Part 2

function rotateRightmostDigits(num, digitIdx) {
  var numArr = String(num).split('').reverse();
  var removedNum = numArr.splice(digitIdx - 1, 1);
  numArr.unshift(removedNum);
  return numArr.reverse().join('');
}

// console.log(rotateRightmostDigits(735291, 1)) // 735291
// console.log(rotateRightmostDigits(735291, 2)) // 735219
// console.log(rotateRightmostDigits(735291, 3)) // 735912
// console.log(rotateRightmostDigits(735291, 4)) // 732915
// console.log(rotateRightmostDigits(735291, 5)) // 752913
// console.log(rotateRightmostDigits(735291, 6)) // 352917


// Rotate Part 3

function maxRotation(num) {
  var length = String(num).length;
  for (var i = length; i >= 2; i -= 1) {
    num = rotateRightmostDigits(num, i);
  }
  return parseInt(num, 10);
}

// console.log(maxRotation(735291))        // 321579
// console.log(maxRotation(3))             // 3
// console.log(maxRotation(35))            // 53
// console.log(maxRotation(105))           // 15 # the leading zero gets dropped
// console.log(maxRotation(8703529146))    // 7321609845


// Stack Machine Interpretation

/*
input is a string of operations seperated by spacees
output: number


split the input string into array of operations
itterate over the array and perform each operation
use a case statement for each of the operation options

*/
function invalidNumStr(input) {
  return input === '' || isNaN(input);
}

function validStack(stack) {
  var VALID_TOKENS = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP', 'PRINT']
  var invalidTokens = stack.split(' ').filter(function(token) {
    return VALID_TOKENS.indexOf(token) === -1 && invalidNumStr(token); 
  }, []);
  return invalidTokens.length === 0
}


function minilang(tokenStack) {
  var stack = [];
  var register = 0;
  if (!validStack(tokenStack)) { return 'Invalid Entry' }
  tokenStack.split(' ').forEach(function(operation) {
    switch(operation) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = parseInt(register / stack.pop(), 10);
        break;
      case 'MOD':
        register = parseInt(register % stack.pop(), 10);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break
      default:
        register = parseInt(operation, 10); 
    }
  });
}
// 5 3


// console.log(minilang('PRINT'));
// // 0

// console.log(minilang('5 PUSH 3 MULT PRINT'));
// // 15

// console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// // 5
// // 3
// // 8

// console.log(minilang('5 PUSH POP PRINT'));
// // 5

// console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// // 5
// // 10
// // 4
// // 7

// console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT '));
// // 6

// console.log(minilang('4 PUSH PUSH 7 MOD MULT PRINT '));
// // 12

// console.log(minilang('-3 PUSH 5 SUB PRINT'));
// // 8

// console.log(minilang('6 PUSH'))
// // (nothing printed; no PRINT commands)


// Word to Digit

function wordToDigit(phrase) {

}


wordToDigit('Please call me at five five five one two three four. Thanks.');
//'Please call me at 5 5 5 1 2 3 4. Thanks.'

// // HOW OLD IS TEDDY
// function teddy() {
//   var years = Math.floor(Math.random() * (200 - 20 + 1) + 20);
//   return `Teddy is ${years} old!`
// }

// console.log(teddy());
// console.log(teddy());

// SEARCHING 101

// function checkLastNum(numOfNums) {
//   var numbers = [];
//   var lastNum;
//   var numAppears;

//   for (var i = 1; i < numOfNums; i++) {
//     numbers.push(getUserNumber(i));
//   }
//   lastNum = prompt("Enter the last number:");
//   numAppears =
//     numbers.indexOf(lastNum) === -1 ? "does not appear in" : "appears";
//   return `The number ${lastNum} ${numAppears} in [${numbers}]`;
// }

// function getUserNumber(nthNum) {
//   var formattedNum = appendEnding(nthNum);
//   return prompt(`Enter the ${formattedNum} number:`);
// }

// function appendEnding(number) {
//   var numStr = String(number);
//   var ending;
//   if (["11", "12", "13"].indexOf(numStr.slice(-2)) !== -1) {
//     return numStr + "th";
//   }
//   switch (numStr.slice(-1)) {
//     case "1":
//       ending = "st";
//       break;
//     case "2":
//       ending = "nd";
//       break;
//     case "3":
//       ending = "rd";
//       break;
//     default:
//       ending = "th";
//   }

//   return numStr + ending;
// }

// console.log(checkLastNum(3));

// WHEN WILL I RETIRE

// var age = prompt('What is your age?');
// var retireAge = prompt('At what age would you like to retire?')
// var today = new Date();
// var yearsLeftToWork = retireAge - age;
// var retireYear = today.getFullYear() + yearsLeftToWork;

// console.log(`It's ${today.getFullYear()}. You will retire in ${retireYear}`);
// console.log(`You only have ${yearsLeftToWork} years of work to go!`)


// Palindromic Strings Pt 1

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// // console.log(isPalindrome('madam'));                    // true
// // console.log(isPalindrome('Madam'));                    // false (case matters)
// // console.log(isPalindrome('madam i\'m adam'));          // false (all characters matter)
// // console.log(isPalindrome('356653'));                   // true

// function isRealPalindrome(str) {
//   var normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   console.log(str);
//   return isPalindrome(normalizedStr);
// }

// // console.log(isRealPalindrome('madam'));               // true
// // console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// // console.log(isRealPalindrome('Madam, I\'m Adam'));    // true (only alphanumerics matter)
// // console.log(isRealPalindrome('356653'));              // true
// // console.log(isRealPalindrome('356a653'));             // true
// // console.log(isRealPalindrome('123ab321'));            // false

// // Palindromic Number

// function isPalindromicNumber(num) {
//   return isPalindrome(num.toString());
// }


// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

// Running Totals
// function runningTotal(arr) {
//   var runningTotal = arr.map(function(num, idx) {
//     return arr.slice(0, idx + 1).reduce(function(sum, num) {
//       return sum += num;
//     })
//   });
//   return runningTotal;
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []

// Letter Swap
// function swap(str) {
//   var strArr = str.split(' ');
//   var firstLetter, lastLetter, wordArr;
//   var swapArr = strArr.map(function(word) {
//     wordArr = word.split('');
//     firstLetter = wordArr[0];
//     wordArr[0] = wordArr[wordArr.length -1];
//     wordArr[wordArr.length - 1] = firstLetter;
//     return wordArr.join('');
//   });
//   return swapArr.join(' ');
// }

// console.log(swap('Oh what a wonderful day it is'));    // 'hO thaw a londerfuw yad ti si'
// console.log(swap('Abcde'));                            // 'ebcdA'
// console.log(swap('a'));                                // 'a'


//Letter Counter Pt 1

// function wordSizes(str) {
//   var count = {};
//   if (str.length === 0) { return count; }
//   str.split(' ').forEach(function(word) {
//     return (count[word.length] += 1) || (count[word.length] = 1);
//   });
//   return count;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4" : "1", "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes('What\'s up doc?'));                             // { "6": 1, "2": 1, "4": 1 }
// console.log(wordSizes(''));                                            // {}

// Letter Counter Part 2

function wordSizes(str) {
  var count = {};
  if (str.length === 0) { return count; }
  str.replace(/[^[a-z\s]/gi, '').split(' ').forEach(function(word) {
    return (count[word.length.toString()] += 1) || (count[word.length] = 1);
  });
  return count;
}

console.log(wordSizes('Four score and seven.'));                        // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));   // { "3": 5, "6": 3 }
console.log(wordSizes('What\'s up doc?'));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                             // {}
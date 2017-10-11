// Uppercase Check

function isUppercase(str) {
  return str === str.toUpperCase();
  // return !str.match([/a-z/])
}


// console.log(isUppercase('t'));          // false
// console.log(isUppercase('T'));          // true
// console.log(isUppercase('Four Score')); // false
// console.log(isUppercase('FOUR SCORE')); // true
// console.log(isUppercase('4SCORE!'));    // true
// console.log(isUppercase(''));           // true

// Delete Vowels

function removeVowels(wordArr) {
  return wordArr.map(function(word) {
    return word.replace(/[aeiou]/gi,'');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));             // ['bcdfghjklmnpqrstvwxyz']
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));      // ['grn', 'YLLW', 'blck', 'wht']
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                    // ['BC', '', 'XYZ']console.log(
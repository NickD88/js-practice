/*
input: plain text, key
output: encrypted message

rules:
- only ecrypt lower and upper letters, all other characters are passed through unchanged
- upper case encrypts to upper case and lower to lower case
- values will wrap around 'Z' with a key of 3 -> 'C'
- key of 0 will return same value passed in


algorithm:
- split input string into an array of characters
- use map on the array
- if the characters is a letter match [A-Za-Z].match(char)
  - transform the character depending on the key and push to output array
    - determine charcode of char
    - if key >= 26 subtract 26 until less then 26
    - add current ascii value to the reduced key value
    - determine if character is lower or upper case 
    - if value is over the upper bound of Z or z, subtract 26 
- else
  - keep the original character
- join the array and return it

*/

function caesarEncrypt(message, key = 0) {
  while (key >= 26) {
    key -= 26;
  }

  var encrypted = message.split("").map(function(char) {
    if (char.match(/[A-Za-z]/)) {
      return encryptLetter(char, key);
    } else {
      return char;
    }
  });

  return encrypted.join("");
}

function encryptLetter(letter, key) {
  var charCode = letter.charCodeAt();
  var upperLimit, lowerLimit, transformedCode;

  if (charCode <= 90) {
    upperLimit = "Z".charCodeAt();
    lowerLimit = "A".charCodeAt();
  } else {
    upperLimit = "z".charCodeAt();
    lowerLimit = "a".charCodeAt();
  }

  charCode += key;

  if (charCode > upperLimit) {
    charCode -= 26;
  } else if (charCode < lowerLimit) {
    charCode += 26;
  } else {
    charCode = charCode;
  }

  return String.fromCharCode(charCode);
}

// negative Key
console.log(caesarEncrypt("A", -1)); // /'Z'

// no key
console.log(caesarEncrypt("A")); // 'A'

// empty input
console.log(caesarEncrypt("", 5)); // ''('', 5);        // ''

// // only special characters
console.log(caesarEncrypt("$%@*  __   A2833", 55)); // '$%@*  __   D2833'

// // Simple shift
console.log(caesarEncrypt("A", 0)); // 'A'
console.log(caesarEncrypt("A", 3)); // 'D'

// // Wrap around
console.log(caesarEncrypt("y", 5)); // 'd'
console.log(caesarEncrypt("a", 47)); // 'v'

// All letters
caesarEncrypt("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 25);
// ZABCDEFGHIJKLMNOPQRSTUVWXY
console.log(caesarEncrypt("The quick brown fox jumps over the lazy dog!", 5));
// Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!

// Many non-letters
console.log(
  caesarEncrypt(
    "There are, as you can see, many punctuations. Right?; Wrong?",
    2
  )
);
// Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?

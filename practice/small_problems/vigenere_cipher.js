/*
input = string
output = encrptyed string

rules
  -only alphabetic characters [A-Za-Z] will encrpyt, all others are passed through
  -the encrpytion key will repeatedly itterate over given cypher word and the value
    is equal to the index of the letter in the alphabet
  - 



algorighm
- create a lookup string a->z for index lookup
- create a cipher array the length of the original message's alpabetical chars and repeat the cipher word
- split original message into an array of characters
- call map on the array of characters
 - if character is alphabetic - shift character based on current cipher character
 - else leave character as is
- join array and return

*/

function vegenereCipher(message, cipherWord) {
  var encrypted = '';
  var ciphers = determineCiphers(cipherWord);

  message.split('').forEach(function(char) {
    if (char >= 'A' && char <= 'Z') {
      encrypted += encrypt(char, ciphers[0], 'upper');
      ciphers.push(ciphers.shift());
    } else if (char >= 'a' && char <= 'z') {
      encrypted += encrypt(char, ciphers[0], 'lower')
      ciphers.push(ciphers.shift());
    } else {
      encrypted += char;
    }
  });
  return encrypted;
}

function determineCiphers(cipherWord) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return cipherWord.toLowerCase().split('').map(function(char){
    return alphabet.indexOf(char);
  });
}

function encrypt(letter, key, charCase) {
  var upperLimit = charCase === 'upper' ? 90 : 122;
  var charCode = letter.charCodeAt();
  charCode += key;

  if (charCode > upperLimit) {
    charCode -= 26;
  }

  return String.fromCharCode(charCode);
}


console.log(vegenereCipher('Pineapples don\'t go on pizzas!', 'meat'));

// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vegenereCipher('Pineapples don\'t go on pizzas!', 'Aa'));

// Pineapples don't go on pizzas!

console.log(vegenereCipher('Dog', 'Rabbit'));
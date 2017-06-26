function toLowerCase(string) {
  formattedStr = '';

  for (var i = 0; i < string.length; i++) {

    asciiValue = string[i].charCodeAt(0);
    if (asciiValue >= 65 && asciiValue <= 90) {
      asciiValue += 32
      formattedStr += String.fromCharCode(asciiValue);
    } else {
      formattedStr += string[i];
    }
  }
  return formattedStr;
}

// for loop through the string and build a new string with all lower case.
// if the character ascii value points to upper case add 32 to ascii
// and concatinate returned string the lower case value. Else concatinate
// the character to the returned string.


console.log(toLowerCase('ALPHABET'));      // "alphabet"
console.log(toLowerCase('123'));           // "123"
console.log(toLowerCase('abcDEF'));        // "abcdef"
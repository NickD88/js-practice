function substr(string, start, length) {
  var subString = '';

  // var startIndex = function() {
  //   return start >= 0 ? start : (string.length + start);
  // }

  if (start < 0) {
    start = string.length + start;
  }

  for (var i = start; subString.length < length; i++ ) {
    if (i >= string.length) {
      break;
    } else {
      subString += string[i];
    }
  }

  return subString;
}



var string = 'hello world';

console.log(substr(string, 2, 4));     // "llo "
console.log(substr(string, -3, 2));    // "rl"
console.log(substr(string, 8, 20));    // "rld"
console.log(substr(string, 0, -20));   // ""
console.log(substr(string, 0, 0));     // ""
console.log(substr(string, 2, 5));     // "llo w"

// itterate over the string from the starting index position
// build a new string appending each character from the oringinal string
// until the desired string length is reached.  
function substring(string, start, end) {
  var subStr = '';

  var verifyValidInut = function(input) {
    var num = 0;
    if (isNaN(input) || input < 0) {
      return num;
    } else if (input > string.length) {
      return string.length;
    } else {
      return input;
    }
  }
  
  if (start > end) {
    var temp = start;
    start = end;
    end = temp;
  }

  if (end === undefined) {
    end = string.length;
  }

  start = verifyValidInut(start);
  end = verifyValidInut(end);

  for (var i = start; i < end; i++) {
    subStr += string[i];
  }

  return subStr;
}


var string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 2, 2));    // ''
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"


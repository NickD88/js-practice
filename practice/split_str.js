function splitString(str, delimiter) {
  if (delimiter === undefined ) {
    console.log('Error: No Delimiter');
    return;
  }

  var tempStr = '';
  for (var i = 0; i < str.length; i++) {
    if (delimiter === '') {
      console.log(str[i]);
    } else if (str[i] !== delimiter) {
      tempStr += str[i];
    } else {
      console.log(tempStr);
      tempStr = '';
    }
  }
  if (tempStr !== '') {
    console.log(tempStr);
  }
}

// loop through the string
// store each character in a temporary string
// if a delimiter is found do not store the char and log the stored string
// clear temp string and continue with the loop
// after loop if temp string is not empty, log it.  

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
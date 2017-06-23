function trim(str) {
  var trimmedStr = trimLeft(str);
  trimmedStr = trimRight(trimmedStr);

  return trimmedStr;
}

function trimLeft(str) {
  var formattedStr = '';
  var buildStr = false;

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      buildStr = true;
    }

    if (buildStr) {
      formattedStr += str[i];
    }
  }

  return formattedStr;
}

function trimRight(str) {
  var formattedStr = '';
  var buildStr = false

  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') {
      buildStr = true;
    }

    if (buildStr) {
      formattedStr = str[i] + formattedStr;
    }
  }

  return formattedStr;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""


// loop through each string character from beginning 
// delete until a non-space character
// repeat from the end
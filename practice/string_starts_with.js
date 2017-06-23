// function startsWith(string, searchString) {
//   var comparisonString = '';

//   for (var i = 0; i < searchString.length; i++) {
//     comparisonString += string[i];
//   }
//   return comparisonString === searchString;
// }


function startsWith(string, searchString) {
  for (var i = 0; i < searchString.length; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }
  return true;
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));       // true
console.log(startsWith(str, 'We put'));   // true
console.log(startsWith(str, ''));         // true
console.log(startsWith(str, 'put'));      // false

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false


// count length of searchString to use for loop
// for loop over string length of searchString 
// storing each character in new variable
// compare tempString to searchString to see if match

// refactored to compare each character as it is more efficient
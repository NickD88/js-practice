function indexOf(firstString, secondString) {
  var searchLength = secondString.length;

  for (var i = 0; i <= firstString.length; i++) {
    var stringSegment = '';
    for (var j = i; j < i + searchLength; j++) {
      stringSegment += firstString[j];
      if (stringSegment === secondString) {
        return (i);
      }
    }
  }
  return (-1);
}

function lastIndexOf(firstString, secondString) {
  var searchLength = secondString.length;

  for (var i = (firstString.length - 1); i > 0; i--) {
    var stringSegment = '';
    for (var j = i; j > i - searchLength; j--) {
      stringSegment += firstString[j];
      if (secondString == stringSegment.split('').reverse().join('')) {
        return (j);
      }
    }
  }
  return (-1)
}

// loop through the string indicies start to finish and finish to start
// log the index where a

console.log(indexOf('Some strings', 's')); // 5
console.log(indexOf('Blue Whale', 'Whale'));    // 5
console.log(indexOf('Blue Whale', 'Blute'));    // -1
console.log(indexOf('Blue Whale', 'leB'));      // -1


console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
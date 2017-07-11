function repeatedCharacters(string) {
  var lowerStr = string.toLowerCase();
  var charCount = {};

  for (var i = 0; i < lowerStr.length; i++) {
    charCount[lowerStr[i]] = (charCount[lowerStr[i]] || 0) + 1; 
  }

  for (var key in charCount) {
    if (charCount.hasOwnProperty(key) && charCount[key] === 1)
      delete charCount[key];
  }

  return charCount;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
function anagram(word, list) {
  function sortWord(initialWord) {
    return initialWord.split('').sort(function(a, b) {
      var letterA = a.toLowerCase();
      var letterB = b.toLowerCase();
      if (letterA < letterB) {
        return 1;
      } else if (letterA > letterB) {
        return -1;
      } else {
        return 0;
      }
    }).join('');
  }
  
  var sortedWord = sortWord(word);
  return list.filter(function(value) {
    return sortedWord === sortWord(value);
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));  // [ "enlist", "inlets" ]

// sort word 
// filter the arguments array if the word matches the sorted element
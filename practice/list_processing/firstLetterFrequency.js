function findHighestFrequency(inputArr) {
  var firstLetters = inputArr.map(function(element) {
    return element[0];
  });

  var letterCount = firstLetters.reduce(function(obj, value) {
    obj[value] = obj[value] + 1 || 1;
    return obj;
  },{});

  var highestCount = Object.keys(letterCount).reduce(function(prevLetter, nextLetter) {
    return letterCount[prevLetter] > letterCount[nextLetter] ? prevLetter : nextLetter;
  });

  return highestCount;
}

var names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];
console.log(findHighestFrequency(names));
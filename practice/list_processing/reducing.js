// fun

function myReduce(array, func, initial) {
  var value;
  var index;

  if (typeof initial === 'undefined') {
    value = array[0];
    index = 1;
  } else {
    value = initial;
    index = 0;
  }

  array.slice(index).forEach(function(element) {
    value = func(value, element);
  });

  return value;
}

var smallest = function(result, value) {
  return result <= value ? result : value;
};

var sum = function(result, value) {
  return result + value;
};

// console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49


function longestWord(words) {
  return myReduce(words, longest);
}

var longest = function(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"
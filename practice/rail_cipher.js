function encodeRailCipher(message, rows) {
  var messageArray = message.toUpperCase().match(/[a-z]/gi);
  var pointer = 0;
  var railsArray = initializeNewArray(rows, messageArray.length);
  var increaseIndex = true;
  
  for (var i = 0; i < messageArray.length; i++) {
    railsArray[pointer][i] = messageArray[i];
    [pointer, increaseIndex] = findNextRail(pointer, increaseIndex, (rows - 1));
  }
  
  var returnedArr = railsArray.map(function(rail) {
    return rail.join('');
  }).join('\n');
  
  return returnedArr;
}

function decodeRailcipher(message) {
  var rows = message.split('\n').length;
  var messageArr = message.split('\n').map(function(row) {
    return row.split('');
  });
  var length = messageArr[0].length;
  var pointer = 0;
  var increaseIndex = true;
  var decodedMessage = '';
  for (var i = 0; i < length; i++) {
    decodedMessage += messageArr[pointer][i];
    [pointer, increaseIndex] = findNextRail(pointer, increaseIndex, (rows - 1));
  }
  return decodedMessage;
}

function findNextRail(currentValue, increaseIndex, maxRows) {
  var returnValue, direction;
  
  if (currentValue === maxRows) {
      increaseIndex = false;
      returnValue = currentValue -= 1;
  } else if (currentValue === 0) {
      increaseIndex = true;
      returnValue = currentValue += 1;
  } else {
    increaseIndex ? returnValue = currentValue + 1 : returnValue = currentValue - 1;
  }

  return [returnValue, increaseIndex];
}

function initializeNewArray(numSubArrays, length) {
  var arr = [];
  for (var i = 0; i < numSubArrays; i++) {
    arr.push('.'.repeat(length).split(''));
  }
  return arr;
}

var message = 'We Are Discovered Flee At Once';
var encodedMessage = encodeRailCipher(message, 3);
var encodedMessage1 = encodeRailCipher(message, 20);
console.log(encodeRailCipher(message, 3));
console.log(encodeRailCipher(message, 5));
console.log(decodeRailcipher(encodedMessage));
console.log(decodeRailcipher(encodedMessage1));


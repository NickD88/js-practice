function compareVersions(version1, version2){
  var v1Arr, v2Arr, v1Value, v2Value;
  
  if (checkInvalidInput(version1)|| checkInvalidInput(version2)) {
    return null;
  }
  
  v1Arr = version1.split('.').map(Number);
  v2Arr = version2.split('.').map(Number);
  
  var longestLength = v1Arr.length > v2Arr.length ? v1Arr.length : v2Arr.length;

  for (var i = 0; i < longestLength; i++) {
    v1Value = v1Arr[i] || 0;
    v2Value = v2Arr[i] || 0;
    
    if (v1Value > v2Value) {
      return 1;
    } else if (v1Value < v2Value) {
      return -1;
    } else {
      continue;
    }
  }
  return 0;
}

function checkInvalidInput(inputStr) {
  return inputStr.match(/^(\d+([.]\d+)*$)/) === null;
}

console.log(compareVersions('.1', '1') === null);
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1.18.2', '1.17') === 1);
console.log(compareVersions('0.1', '1a') === null);
console.log(compareVersions('1', '1'));          // 0
console.log(compareVersions('1.1', '1.0'));      // 1
console.log(compareVersions('2.3.4', '2.3.5'));  // -1
console.log(compareVersions('1.a', '1'));        // null
console.log(compareVersions('.1', '1'));         // null
console.log(compareVersions('1.', '2'));         // null
console.log(compareVersions('1..0', '2.0'));     // null
console.log(compareVersions('1.0', '1.0.0'));    // 0
console.log(compareVersions('1.0.0', '1.1'));    // -1
console.log(compareVersions('1.0', '1.0.5'));    // -1

// input: two numbers with multiple digits seperzted by '.'

// output v1 > v2  return 1
// output v1 < v2 return -1
// v1 === v2 return 0

// split each version number on (.)
// find the largst array index
// compare each array index and return if not equal (if index is undefined set to 0)
function repeat(string, times) {
  if (isNaN(times) || times < 0) {
    return undefined;
  }

  counter = times;
  tempStr = ''
  while (counter > 0) {
    tempStr += string;
    counter--;
  }
  return tempStr;
}

console.log(repeat('abc', 1));    // "abc"
console.log(repeat('abc', 2));    // "abcabc"
console.log(repeat('abc', -1));   // undefined
console.log(repeat('abc', 0));    // ""
console.log(repeat('abc', 'a'));  // undefined


// use counter (times) and while loop
// start with empty string and each pass decrement counter and add string to temp string
// use guard clause to check for bad inputs
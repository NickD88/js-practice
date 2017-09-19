/*

A collection of spelling blocks has two letters per block, as shown in this 
list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to just those words 
that do not use both letters from any given block. You can also only use 
each block once.

Write a function that takes a word as a string, and returns true if it 
can spell the argument passed in from the set of blocks, false otherwise. 
You can consider the letters to be case insensitive when you apply the rules.

Examples:

isBlockWord('BATCH'); // true
isBlockWord('BUTCH'); // false
isBlockWord('jest');  // true

input: string 1 word
output: boolean

rules:
 - each word can only use one side of the block of numbers
 - each letter can only be used once

 - false condition
  - any letter used more then once
  - any letter and subsequent number in the block used
  - empty string

 - true condition
  - each word only ocntains once instance of the letter
  - each letter does not use the same letter in the block

algorithm: 
  - lookup table as a array of arrays for each block [[b, o], [x, k]]
  - check for empty input and return false if empty
  - split the word into an array of letters and map to lowercase
  - loop through the array of letters 
    - for each letter remvove the cooresponding block
    - if the block does not exist return false
    - if all blocks exist return true

*/

function isBlockWord(input) {
  var letterBlocks = [['b', 'o'], ['x', 'k'], ['d', 'q'], ['c', 'p'], ['n', 'a'], ['g', 't'], ['r', 'e'], ['f', 's'], ['j', 'w'], ['h', 'u'], ['v', 'i'], ['l', 'y'], ['z', 'm']];
  var letterFound, word;

  if (input.length === 0) { return false; }
  word = input.replace(/[^a-zA-Z]/g, '').toLowerCase();

  for (var i = 0; i < word.length; i++) {
    letterFound = false
    for (var k = 0; k < letterBlocks.length; k++) {
      if (letterBlocks[k][0] === word[i] || letterBlocks[k][1] === word[i]) {
        letterFound = true;
        letterBlocks.splice(k, 1);
        continue;
      }
    }
    if (!letterFound) { return false; }
  }
  return true;
}

console.log(isBlockWord('BaTcH')); // true
console.log(isBlockWord('Butch')); // false
console.log(isBlockWord(' B aT cH')); // true
console.log(isBlockWord('bgvjH')); // true
console.log(isBlockWord('')); // false
console.log(isBlockWord('doggy')); // false
console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BU322TCH')); // false
console.log(isBlockWord('jest'));  // true
console.log(isBlockWord('floW'));  // true
console.log(isBlockWord('APPLE')); // false
console.log(isBlockWord('apple')); // false
console.log(isBlockWord('apPLE')); // false
console.log(isBlockWord('Box'));   // false
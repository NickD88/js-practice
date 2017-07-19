// function isXor(firstArg, secondArg) {
//   if (!!firstArg === true && !!secondArg === false) {
//     return true;
//   } else if (!!firstArg === false && !!secondArg === true) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isXor(firstArg, secondArg) {
  return Boolean(firstArg) !== Boolean(secondArg);
}

// if first arg is truthy second must be falsey
// if first arg is falsy second must be truthy
// otherwise return false

console.log(isXor(false, true)); // true
console.log(isXor(true, false)); // true
console.log(isXor(false, false)); // false
console.log(isXor(true, true)); // false

console.log(isXor(false, 3)); // true
console.log(isXor("a", undefined)); // true
console.log(isXor(null, "")); // false
console.log(isXor("2", 23)); // false

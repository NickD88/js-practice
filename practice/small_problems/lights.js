function lightsOn(switches) {
  var returnedArr = [];
  for (var i = 1; i <= switches; i++) {
    if (isSquare(i)) {  
      returnedArr.push(i);
    }
  }
  return returnedArr
}

lightsOn(5);   // [1, 4];

// detailed result of each round for 5 lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off; 1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off; 1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);  // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// input: number (of lights)
// output: array of 'on' lights

// rules:
//   - first run toggles each number
//   - second run toggels all multiples of 2
//   - third run toggles all multiples of 3
//   - etc...
//   - itterations end when greater then n

// Algorithm
//   - 


function isSquare(num) {
  return num > 0 && Math.sqrt(num) % 1 === 0;
}

console.log(lightsOn(100));
console.log(lightsOn(5));
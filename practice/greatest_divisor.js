
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else  {
    return gcd(b, Math.floor(a % b));
  }
}

// find the smallest of the two integers
// if smallest is divisible by biggest return smallest
// else count down from smallest to 1 to find the first number divisible

//chose to implement the Euclidean Algorigm with recursion
//it will also handle mix matched higher and lower numbers  


console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(2, 9));    // 1
console.log(gcd(352, 400)); //16
console.log(gcd(12, gcd(4, 8))); //4

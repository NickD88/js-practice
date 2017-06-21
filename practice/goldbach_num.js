function isPrime(num) {

  if (num <= 1 || (num > 2 && num % 2 === 0)) {
    return false;
  }

  for (var i = 3; i < num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


function checkGoldbach(n) {
  if (n < 4 || n % 2 === 1) {
    console.log(null);
    return;
  }

  for (i = 1; i <= n; i++) {
    var j = n - i;
    if (isPrime(i) && isPrime(j)) {
      console.log(i, j);
    }
    if (i >= (n / 2)) {
      break;
    }
  }
}


console.log(checkGoldbach(3));
// logs: null

console.log(checkGoldbach(4));
// logs: 2 2

console.log(checkGoldbach(12));
// logs: 5 7

console.log(checkGoldbach(100));
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

function logMultiples(num) {
  var largestMultiple = Math.floor(100 / num) * num
  
  for (var i = largestMultiple; i >= 0; i -= num) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

logMultiples(17);

logMultiples(21);
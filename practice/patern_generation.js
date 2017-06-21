function generatePattern(num) {
  var lastRow = '';

  for (var i = 1; i <= num; i++) {
    lastRow += String(i);
  }

  lineWidth = lastRow.length

  for (var i = 1; i <= num; i++) {
    var output = '';
    for (var j = 1; j <= i; j++) {
      output += String(j);
    }

    stars = lineWidth - output.length

    for (var k = 1; k <= stars; k++) {
      output += '*';
    }
    console.log(output);
  }
}

generatePattern(15);

// create a nested for loop
// first loop controls the vertical 
// second loop controls the horizontal 
function multiplesOfThreeAndFive(min, max) {
  for (var i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 == 0) {
      console.log(i + '!');
    } else if (i % 3 == 0 || i % 5 == 0 ) {
      console.log(i);
    }
  }
}

multiplesOfThreeAndFive(50, 100);

// for loop from 1 - 100
// if number div 3 and 5 put number with !
// if number div by 3 || 5 put number
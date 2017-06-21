function getScore(num) {
  var score = prompt('Enter score ' + (num + 1) + ':');
  return score;
}

function calculateAvg(numArray) {
  var total = 0;

  for (var i = 0; i < numArray.length; i++) {
    total += numArray[i];
  }
  return Math.floor(total / numArray.length);
}

function determineGrade(gradeArray) {
  var average = calculateAvg(gradeArray);

  if (average >= 90) {
    return 'A';
  } else if (average >= 70) {
    return 'B';
  } else if (average >= 50) {
    return 'C';
  } else {
    return 'F';
  }
}

function studentGrade(numGrades) {
  var grades = [];
  for (var i = 0; i < numGrades; i++) {
    grades.push(Number(getScore(i)));
  }
  console.log('Based on the average of your ' + grades.length +
    ' scores your letter grade is "' + determineGrade(grades) + '".');
}

studentGrade(3);
studentGrade(7);




// prompt user to enter three test scores 
// push each score into an Array
// average each score and display the grade
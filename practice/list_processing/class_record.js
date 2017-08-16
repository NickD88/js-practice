var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

var EXAM_WEIGHT = 0.65;
var EXERCISE_WEIGHT = 0.35;


function generateClassRecordSummary(studentsRecords) {
  var studentAverages = getStudentsGrades(studentsRecords);
  var exams = examSummary(studentsRecords);
  return {
    studentGrades: studentAverages,
    exams: exams
  };
}

function getStudentsGrades(students) {
  var studentAverage = [];
  Object.keys(students).forEach(function(student) {
    var studentScores = students[student].scores;
    var examAverage = calculateExamAverage(studentScores.exams);
    var exerciseAverage = calculateExerciseAverage(studentScores.exercises);
    var weightedAverage = examAverage * EXAM_WEIGHT + exerciseAverage * EXERCISE_WEIGHT
    studentAverage.push(Math.round(weightedAverage))
  });
  return formatGrades(studentAverage);
}

function calculateExerciseAverage(scores) {
  return scores.reduce(function(sum, grade){
    return sum += grade;
  }, 0);
}

function calculateExamAverage(scores) {
  var totalPoints = scores.reduce(function(sum, grade) {
    return sum += grade;
  }, 0);
  return totalPoints / scores.length;
}

function formatGrades(scores) {
  var formattedGrades = scores.map(function(grade) {
    var gradeWithLetter = grade;
    switch(true){
      case (grade <= 100 && grade >= 93):
        gradeWithLetter += ' (A)';
        break;
      case (grade >= 85):
        gradeWithLetter += ' (B)';
        break;
      case (grade >= 77):
        gradeWithLetter += ' (C)';
        break;
      case (grade >= 69):
        gradeWithLetter += ' (D)';
        break;
      case (grade >= 60):
        gradeWithLetter += ' (E)';
        break;
      default:
        gradeWithLetter += ' (F)';
    }
    return gradeWithLetter;
  });
  return formattedGrades;
}

// function examSummary(students) {
//   var summary = [];
//   var exams = sortedExamGrades(students);
//   exams.forEach(function(exam) {
//     summary.push(
//         {
//         average: 6,
//         minimum: 2,
//         maximum: 4
//       });
//   });
//   return summary;
// }

// function sortedExamGrades(students) {
//   var sortedExams = [];
//   var exams = getAllExamScores(students);
//   for (var i = 0; i < exams.length - 1; i++) {
//     var examScores = [];
//     for (var j = 0; j < exams.length; j++) {
//       examScores.push(exams[j][i]);
//     }
//     sortedExams.push(examScores);
//   }
//   return sortedExams;
// }

// function getAllExamScores(students) {
//   var allGrades = [];
//   Object.keys(students).forEach(function(student) {
//     allGrades.push(students[student].scores.exams);
//   });
//   console.log(allGrades);
//   return allGrades;
// }

console.log(generateClassRecordSummary(studentScores));

// returns:

// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }

// input object
// output object

// compute each student exam average - reduce array 
// compute the exercise score total - reduce array
// compute the weighted averages
// post process the average (round) and look up letter grade
// push letter grade into studentGrades array insude the returned object

// loop through each exam and calculate the average / min and max number for each exam
// average should be rounded to one decimal point
// return averages in an array of objects inside the returned object
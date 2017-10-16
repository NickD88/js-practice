// Lettercase Percentage Ratio

function letterPercentages(str) {
  var totalCount = str.length;
  var lower = str.match(/[a-z]/g) || [];
  var upper = str.match(/[A-Z]/g) || [];
  var neither = str.match(/[^a-z]/gi) || [];

  function calcPercentage(arr) {
    return (arr.length / totalCount * 100).toFixed(2);
  }

  return {
    lowercase: calcPercentage(lower),
    uppercase: calcPercentage(upper),
    neither: calcPercentage(neither)
  };
}

// console.log(letterPercentages("abCdef 123")); // { lowercase: 50.00, uppercase: 10.00, neither: 40.00 }
// console.log(letterPercentages("AbCd +Ef")); // { lowercase: 37.50, uppercase: 37.50, neither: 25.00 }
// console.log(letterPercentages("123")); // { lowercase: 0.00, uppercase: 0.00, neither: 100.00 }

// Triangle Sides

function triangle(s1, s2, s3) {
  var sideArr = [s1, s2, s3].sort(function(a, b) {
    return a - b;
  });
  var longest = sideArr[2];
  var middle = sideArr[1];
  var shortest = sideArr[0];
  var type;

  if (shortest <= 0 || longest > middle + shortest) {
    type = "invalid";
  } else if (longest === middle && middle === shortest) {
    type = "equilateral";
  } else if (
    longest === middle ||
    middle === shortest ||
    shortest === longest
  ) {
    type = "isoceles";
  } else {
    type = "scalene";
  }

  return type;
}

// console.log(triangle(3, 3, 3));   // equilateral
// console.log(triangle(3, 3, 1.5)); // isosceles
// console.log(triangle(3, 4, 5));   // scalene
// console.log(triangle(0, 3, 3));   // invalid
// console.log(triangle(3, 1, 1));   // invalid

// Tri-Angles

function triAngle(a1, a2, a3) {
  function isValid(angle1, angle2, angle3) {
    return (
      angle1 + angle2 + angle3 === 180 && Math.min(angle1, angle2, angle3) > 0
    );
  }

  function isObtuce(angle1, angle2, angle3) {
    return angle1 > 90 || angle2 > 90 || angle3 > 90;
  }

  function isAcute(angle1, angle2, angle3) {
    return angle1 < 90 || angle2 < 90 || angle3 < 90;
  }

  var type;
  var angles = [a1, a2, a3];

  if (isValid(a1, a2, a3)) {
    if (angles.indexOf(90) !== -1) {
      type = "right";
    } else if (isObtuce(a1, a2, a3)) {
      type = "obtuce";
    } else if (isAcute(a1, a2, a3)) {
      type = "acute";
    }
  } else {
    type = "invalid";
  }

  return type;
}

// console.log(triAngle(60, 70, 50));   // acute
// console.log(triAngle(30, 90, 60));   // right
// console.log(triAngle(120, 50, 10));  // obtuse
// console.log(triAngle(0, 90, 90));    // invalid
// console.log(triAngle(50, 50, 50));   // invalid

// unlucky days

function fridayThe13ths(year) {
  var count = 0;
  for (var i = 1; i <= 12; i++) {
    var date = new Date(year, i, 13);
    if (date.getDay() === 5) {
      count++;
    }
  }
  return count;
}

// console.log(fridayThe13ths(2015)); // 3
// console.log(fridayThe13ths(1986)); // 1



// next featured Number Higher then a Given Value

/* 
- multiple of 7
- odd
- digits appear only once
*/

function featured(num) {
  var featuredNum = 7 - (num % 7) + num;
  featuredNum = featuredNum % 2 === 0 ? (featuredNum + 7) : featuredNum;
  while (featuredNum < Number.MAX_VALUE) {
    if (noMultipleDigits(featuredNum)) {
      return featuredNum;
    } else {
      featuredNum += 14;
    }
  } 
  return 'Error: there is no featured number';
}

function noMultipleDigits(num) {
  var numArr =  String(num).split('');
  for (var i = 0; i < numArr.length; i++) {
    if (numArr.indexOf(numArr[i]) !== numArr.lastIndexOf(numArr[i])) {
      return false;
    }
  }
  return true;
}

console.log(featured(12));        // 21
console.log(featured(20));        // 21
console.log(featured(21));        // 35
console.log(featured(997));       // 1029
console.log(featured(1029));      // 1043
console.log(featured(999999));    // 1023547
console.log(featured(999999987)); // 1023456987
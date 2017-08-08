function totalArea(rectanglesArray) {   
    var totalArea = rectanglesArray.reduce(function(total, rectangle) {
      return total + calculateArea(rectangle);
      }, 0);
      
    return totalArea;
}

function totalSquareArea(rectanglesArray) {
  var perfectSquares = rectanglesArray.filter(function(rectangle) {
    return rectangle[0] === rectangle[1];
  });

  return totalArea(perfectSquares);
}

function calculateArea(rectangle) {
  return rectangle.reduce(function(height, width) {
    return height * width;
  });
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles)); // 141 (12 + 36 + 8 + 81 + 4)

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalSquareArea(rectangles)); // 121


// For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.

// take each pair of nested arrays and and reduce (multiply) the values together
// take each of those values representing the area and add them together
// return the total areas
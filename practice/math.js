function convertToDegrees(radians) {
  return (radians * 180) / Math.PI;
}

// console.log(convertToDegrees(0.524)) // return aprox 30

var negNum = -180;
console.log(Math.abs(negNum));

console.log(Math.sqrt(16777216));

console.log(Math.pow(16 , 6));


var a = 50.72;
var b = 49.2;
var c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));



function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomBetween(10, 20));
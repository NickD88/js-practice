// var myVar = 'This is global';

// function someFunction() {
//   var myVar = 'This is local'; // initialize new local function variable scope
// }

// someFunction();

// console.log(myVar);  //will log the global variable 'This is global'


// var myVar = 'This is global';

// function someFunction() {
//   var myVar = 'This is local';
//   console.log(myVar);  // will log 'This is local'
// }

// someFunction();

// var myVar = 'This is global';

// function someFunction() {
//   myVar = 'This is local';
// }

// someFunction();

// console.log(myVar); // will log 'This is local'  variable is reassigned within the function

// var myVar = 'This is global';

// function someFunction() {
//   console.log(myVar); //logs 'This is global'.  First checks local scope and then checks outer scopes until it reaches the global scope.
// }

// someFunction();

// function someFunction() {
//   myVar = 'This is global';
// }

// someFunction();
// console.log(myVar); // logs 'This is global'  myVar declares in global scope 

// var a = 7;

// function myValue(b) { // the value of 'a' is passed into the function
//  b += 10; // does not change the original a variable's value
// }

// myValue(a);
// console.log(a); // will log 7 


// var a = 7;

// function myValue(a) { // establishes a local scope for the argument a
//   a += 10; // does not reassign the global var a the new value
// }

// myValue(a);
// console.log(a); // will log 7


// var a = [1, 2, 3];

// function myValue(b) { // passes the object's pointer into the function
//   b[2] += 7; // this mutates the array's 2nd index position by adding 7 to the value
// }

// myValue(a);
// console.log(a); // logs [1, 2, 10]

// console.log(a); // logs undefined

// var a = 1;

//the variable declaration is hoisted to the top
//var a
//console.log(a);
//a = 1;


// logValue();  // will log 'Hello, world!'

// function logValue() {  // the function declaration will be hoisted above function calls
//   console.log('Hello, world!'); 
// }


// var logValue = 'foo';

// function logValue() {
//   console.log('Hello, world!');
// }

// console.log(typeof logValue);


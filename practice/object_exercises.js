// var myObject = {
//   a: 'name', 
//   'b': 'test',
//   123: 'c',
//   1: 'd'   // missing the ',' after this property.  Every line property delcaration ends with a ','
// };


// console.log(myObject[1]);
// // myObject[a]; // key must be string value to use bracket notation.  There is no declared variable 'a'
// console.log(myObject.a);


// var person = {
//   firstName: function() {
//     return 'Victor';
//   },
//   lastName: function() {
//     return 'Reyes';
//   },
// };

// console.log(person.firstName() + ' ' + person.lastName());

// var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
// var array2 = [];

// for (var  i = 0; i < array1.length; i++) {
//   array2.push(array1[i]);
// }

// for (var i = 0; i < array1.length; i++) {
//   if (array1[i].startsWith('C')) {
//     array1[i] = array1[i].toUpperCase();
//   }
// }

// console.log(array2);
// ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']
// array2 is a new object assigned the values of array1
// they do not point to the same object in memory.

// in order to have the changes reflected in both arrays
// array2 would need to be assigned to the pointer of Array1
// var array2 = array1;

// **************************

// var myObject = {
//   prop1: '123',
//   prop2: '234',
//   'prop 3': '345',
// };

// var prop2 = '456';
// myObject['prop2'] = '456'; // reassigns prop2 to the value of '456'
// myObject[prop2] = '678'; // assigns the property '456' to the value of '678'

// console.log(myObject[prop2]); // '678'
// console.log(myObject.prop2); // '456'

// // myObject = {
// //   prop1: '123',
// //   prop2: '456',
// //   prop 3: '345',
// //   456': '678',
// // }

// console.log(myObject);

// *****************************

// var myObj = {};

// myObj[myFunc()] = 'hello, '; // calls the myFunc function which sets the property name to 
// // funcProp and the value to 'hello, '

// function myFunc() {  //function gets hoisted
//   return 'funcProp';
// }

// console.log(myObj); // {funcProp = 'hello, '}
// myObj[myFunc()] = 'world!';
// // reAssigns the funcProp property to 'world!'

// console.log(myObj);// {funcProp = 'world!'}

// *************************

// var myArray = ['a', 'b', 'c'];
// console.log(myArray[0]); // 'a'
// console.log(myArray[-1]); // undefined, there is no -1 key
// myArray[-1] = 'd';
// myArray['e'] = 5;
// myArray[3] = 'f';

// console.log(myArray[-1]); // 'd'
// console.log(myArray['e']); // 5
// console.log(myArray); // ['a', 'b', 'c', 'f', -1: 'd', e: 5]

// **************************

// var myArray = [5, 5];
// myArray[-1] = 5;
// myArray[-2] = 5;

// // myArray = [5, 5, -1: 5, -2: 5]
// function average(array) {
//   var sum = 0; // sum = 20
//   for (var i = -2; i < array.length; i++) {
//     sum += array[i];
//   }

//   return sum / array.length; // 20 / 2 = 10
// }

// console.log(average(myArray));

// // initialize the variable 'i' in the for loop to 0 and it will return the expected value
// // alternatly you can use the Object.keys to determine the total number of entries to divide by
// // return sum / Object.keys.(array).length

// ***************************

// function calculateBonus() {
//   return arguments[1] ? arguments[0] / 2 : 0;
// }
// // in JavaScript you can pass any number of arguments into a function
// // all arguments are stored in the arguments array
// // the first part of the tenerary operator is checking if arguments[1] is true
// // if true it will divide the salary passed in as argument[0] by 2 to get the bonus amount
// // if false it will return 0

// calculateBonus(2800, true)      // 1400
// calculateBonus(1000, false)     // 0
// calculateBonus(50000, true)     // 25000

// ***************************

// console.log(penultimate('last word'));               // 'last'
// console.log(penultimate('Launch School is great!')); // 'is'

// // function penultimate(string) {
// //   return string.split(' ')[-2]; // [-2] is undefined as there is no -2 key in the array
// // }

// function penultimate(string) {
//   var strArray =  string.split(' ');
//   return strArray[strArray.length - 2];
//   //return string.split(' ').slice(-2, -1)[0];
// }

// ***************************

// var MINUTES_PER_HOUR = 60;
// var HOURS_PER_DAY = 24;
// var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function timeOfDay(deltaMinutes) {
//   var time = new Date(0, 0, 0, 0, deltaMinutes).toTimeString();
//   return time.substr(0, 5);
// }

// console.log(timeOfDay(0));       // "00:00"
// console.log(timeOfDay(-3));      // "23:57"
// console.log(timeOfDay(35));      // "00:35"
// console.log(timeOfDay(-1437));   // "00:03"
// console.log(timeOfDay(3000));    // "02:00"
// console.log(timeOfDay(800));     // "13:20"
// console.log(timeOfDay(-4231));   // "01:29"


// *******************************

// var MINUTES_PER_HOUR = 60;
// var HOURS_PER_DAY = 24;
// var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   var midnight = new Date(0, 0, 0, 0, 0);
//   var time = new Date(0, 0, 0, timeStr.substr(0, 2), timeStr.substr(3, 2));
//   return (time - midnight) / 60000;
// }

// function beforeMidnight(timeStr) {
//   var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }
//   return deltaMinutes;
// }

// console.log(afterMidnight('00:00'));        // 0
// console.log(beforeMidnight('00:00'));       // 0
// console.log(afterMidnight('12:34'));        // 754
// console.log(beforeMidnight('12:34'));       // 686
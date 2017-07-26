// function processOrder(price, quantity, discount, serviceCharge, tax) {
//   if (!quantity) {    // if (quantity === undefined)
//     quantity = 1;
//   }

//   if (!discount) {   // if (discount === undefined)
//     discount = 0; 
//   }

//   if (!serviceCharge) {  // if (serviceCharge === undefined)
//     serviceCharge = 0.1;
//   }

//   if (!tax) {    // if (tax === undefined)
//     tax = 0.15;
//   }

//   return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
// }
// console.log(processOrder(100));      // 126.5

// function processOrder(price, quantity, discount, serviceCharge, tax) {
//   quantity = quantity || 1;
//   discount = discount || 0;
//   serviceCharge = serviceCharge || 0.1;
//   tax = tax || 0.15;
//   return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
// }
// both of the above functions have limitations if 0 is passed in as an argument
// '0' is a falsy value and will therefore get reassigned to the defaults.

// ***************************

// var person = {name: 'Victor'};
// var otherPerson = {name: 'Victor'};

// console.log(person === otherPerson);  // false; but we want this to be true

// // Objects are reference types and the above two objects are different objects
// // the equality test on objects will test if they are the same objects
// // the above two objects are different objects with similar key value pairs
// // but are not equal to each other.  In order to have the arrays be equal
// // the pointers must point to the same object

// var person = {name: 'Victor'};
// var otherPerson = person;

// console.log(person === otherPerson); // true

// ****************************

// var startingBalance = 1;
// var chicken = 5;
// var chickenQuantity = 7;

// var totalPayable = function(item, quantity) {
//   return startingBalance + (item * quantity);
// }

// startingBalance = 5;
// console.log(totalPayable(chicken, chickenQuantity)); // 5+ 35 = 40

// startingBalance = 10;
// console.log(totalPayable(chicken, chickenQuantity)); // 10 + 35 = 45

// **************************

// function makeDoubler(caller) {
//   return function(number) {
//     console.log('This function was called by ' + caller + '.');
//     return number + number;
//   }
// }


// var doubler = makeDoubler('Victor');
// console.log(doubler(5));                 // 10
// // This function was called by Victor.

// ****************************

// var arr = ['Apples', 'Peaches', 'Grapes'];

// arr[3.4] = 'Oranges'; // inserts a key into the array
// // ['Apples', 'Peaches', 'Grapes', 3.4: 'Oranges]
// console.log(arr);
// console.log(arr.length); // 3
// console.log(Object.keys(arr).length);//4

// arr[-2] = 'Watermelon'; // inerts a key of -2 into the array
// // ['Apples', 'Peaches', 'Grapes', 3.4: 'Oranges]
// console.log(arr);
// console.log(arr.length); // 3
// console.log(Object.keys(arr).length); // 5

// *****************************

// var languages = ['JavaScript', 'Ruby', 'Python'];
// console.log(languages); // ['JavaScript', 'Ruby', 'Python']
// console.log(languages.length); // 3

// languages.length = 4;
// console.log(languages); //['JavaScript', 'Ruby', 'Python', undefined];
// console.log(languages.length); // 4

// languages.length = 1;
// console.log(languages); // ['JavaScript']
// console.log(languages.length); // 1

// languages.length = 3; 
// console.log(languages); // ['JavaScript', undefined, undefined]
// console.log(languages.length); // 3

// languages.length = 1;
// languages[2] = 'Python'; 
// console.log(languages); // ['Javascript',undefined, 'Python']
// console.log(languages[1]);  // undefined
// console.log(languages.length); // 3

// *******************************

// function one() {
//   function log(result) {
//     console.log(result);
//   }

//   function anotherOne() {
//     var result = '';
//     for (var i = 0; i < arguments.length; i++) {
//       result += String.fromCharCode(arguments[i]); // Matrix
//     }

//     log(result);
//   }

//   function anotherAnotherOne() {
//     console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101, 32));
//     anotherOne(116, 111, 32); //to
//   }

//   anotherAnotherOne(); //Welcome
//   anotherOne(116, 104, 101, 32); // the
//   return anotherOne; // includes parameters
// }

// console.log(one()(77, 97, 116, 114, 105, 120, 33));

// Welcome
// to
// the
// Matrix!
// undefined


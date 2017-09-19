var firstName = 'Nick';
var lastName = 'Dectis';
var fullName = firstName + ' ' + lastName;
// console.log(fullName);
// console.log(firstName.concat(lastName));
// console.log(fullName.split(' '));

var language = 'JavaScript'
var idx = language.indexOf('S');
console.log(idx);
var charCode = language.charCodeAt(idx);
console.log(charCode);

console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));

var a = 'a';
var b = 'b';
console.log(a > b); // false
b = 'B';
console.log(a > b); // true

var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';

var compoundSentance = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentance);

console.log(fact1[0]);
console.log(fact2[0]);

var pi = 22 / 7;
console.log(pi.toString().lastIndexOf('14'));

var boxNumber = (356).toString();
console.log(boxNumber);
boxNumber = parseInt(boxNumber, 10);
console.log(typeof(boxNumber));
boxNumber = String(boxNumber);
console.log(typeof(boxNumber));

function greet() {
  var name = prompt('What is your name?')
  if (name.endsWith('!')) {
    console.log('HELLO ' + name.slice(0, -1).toUpperCase() + ' WHY ARE YOU SCREAMING?');
   } else {
    console.log('Hello ' + name + ".");
   }
}

greet();
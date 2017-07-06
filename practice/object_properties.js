var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

function objectHasProperty(obj, property) {
  var keys = Object.keys(obj);
  return keys.indexOf(property) !== -1;
  // return obj.hasOwnProperty(property);

}

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

var wins = {
  steve: 3,
  susie: 4,
};

function incrementProperty(obj, property) {
  if (obj.hasOwnProperty(property)) {
    obj[property] += 1;
  } else {
    obj[property] = 1;
  }
  return obj[property];
}

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
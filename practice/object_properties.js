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

function incrementProperty(object, str) {
  if (object.hasOwnProperty(str)) {
    object[str] += 1;
  } else {
    object[str] = 1;
  }
  return object[str];
}

// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }


var hal = {
  model: 9000,
  enabled: true,
};

function copyProperties(obj1, obj2) {
  var allKeys = Object.keys(obj1);

  for (var i = 0; i < allKeys.length; i++) {
    obj2[allKeys[i]] = obj1[allKeys[i]]; 
  }
  return allKeys.length;

  // var count = 0;
  // for (var property in source) {
  //   destination[property] = source[property];
  //   count++;
  // }

  // return count;

}

// var sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

function wordCount(string) {
  var words = string.split(' ');
  var wordCount = {};
  
  for (var i = 0; i < words.length; i++) {
    wordCount[words[i]] = (wordCount[words[i]] || 0 ) + 1;
  }

  return wordCount;
}


console.log(wordCount('box car cat bag box'));    // { box: 2, car: 1, cat: 1, bag: 1 }

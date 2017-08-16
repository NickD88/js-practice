function processReleaseData(data) {
  var filteredData = [];
  data.forEach(function(element) {
    if (element.hasOwnProperty('title') && element.hasOwnProperty('id')) {
      var obj = {};
      obj['id'] = element.id;
      obj['title'] = element.title;
      filteredData.push(obj);
    }
  });
  return filteredData;
}

// further exploration (add conditional allowing id of 0 to pass as true):

// function processReleaseData(data) {
//   return data.filter(function(release){
//     return (release.id || release.id === 0) && release.title;
//   }).map(function(release) {
//   return {
//     id: release.id,
//     title: release.title,
//   }
//   });
// }

var newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));

// should return:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];

 
// input array of objects
// filter array of objects including only if the object contains title and object keys
// return new array of objects
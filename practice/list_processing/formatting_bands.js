var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  function capitalizeFirstLetter(string) {
    wordArr = [];
    string.split(' ').forEach(function(word) {
      return wordArr.push(word.charAt(0).toUpperCase() + word.slice(1));
    });
    return wordArr.join(' ');
  };

  function removeDots(string) {
    return string.replace(/\./g, '');
  }

  data.map(function(band) {
    band.country = 'Canada';
    band.name = capitalizeFirstLetter(band.name);
    band.name = removeDots(band.name);
  });
  
  return data;
}

console.log(processBands(bands));



// should return:

// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
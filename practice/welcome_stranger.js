function greetings(nameArr, obj) {
  var jobTitle = obj.title + ' ' + obj.occupation;
  
  var fullName = nameArr.join(' ');

  return 'Hello, ' + fullName + '! Nice to have a ' + jobTitle + ' around.'; 
}




console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' }));

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
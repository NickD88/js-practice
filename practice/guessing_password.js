password = 'badPwd';

function guessPassword(input) {
  var counter = 0;

  while (counter < 3) {
    var guess = prompt('What is the password: ');

    if (guess === password) {
      return console.log('You have successfully logged in.');
      
    } else {
      counter++;
      alert('Incorrect login. ' + (3 - counter) + ' attempts remaning.');
    }
  }
  return console.log('You have been denied access.');
}

// set counter to 0
// display message to enter password
// if incorrect increment counter 
// if correct log success message and quit
// quit and display unsuccessful message if entered incorrectly 3 times

guessPassword();
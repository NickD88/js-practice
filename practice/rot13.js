function encodeChar(char) {
  var cipherChar = char.charCodeAt() + 13;
  var topZBoundary;

  if (char.toLowerCase() === char) {
    topZBoundary = 'z'.charCodeAt();
  } else {
    topZBoundary = 'Z'.charCodeAt();
  }
  
  if (cipherChar > topZBoundary) {
    cipherChar -= 26;
  }

  return String.fromCharCode(cipherChar);
}

function rot13(string) {
  var cipherString = '';

  for (var i = 0; i < string.length; i++) {

    if (string[i].match(/[a-zA-Z]/)) {
      cipherString += encodeChar(string[i]);
    } else {
      cipherString += string[i];
    }
  }

  return cipherString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
  //'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.'

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
  //'Teachers open the door, but you must enter by yourself.'

console.log(rot13('Test The cipher'));
  //'Grfg Gur plCuRse'

console.log(rot13(rot13('Test The cipher')));
  //'Test The cipher'

// itterate over the string and build a new return string
// determine if letter is uppercase or lowercase 
// add 13 to ascii value 
// if value the new value is higher then 'Z' or 'z' subtract 26 from total
// concatinate the character represented by the ascii value to the new string
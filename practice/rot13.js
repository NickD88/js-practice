function rot13(string) {
  var cypherString = '';

  var encodeChar = function(char) {
    var cypherChar = char.charCodeAt() + 13;
    var topZBoundary;

    if (char.toLowerCase() === char) {
      topZBoundary = 'z'.charCodeAt();
    } else {
      topZBoundary = 'Z'.charCodeAt();
    }
    
    if (cypherChar > topZBoundary) {
      cypherChar -= 26;
    }

    return String.fromCharCode(cypherChar);
  }

  for (var i = 0; i < string.length; i++) {
    var asciiCode = string.charCodeAt(i);

    if (string[i].match(/[a-zA-Z]/g)) {
      cypherString += encodeChar(string[i]);
    } else {
      cypherString += string[i];
    }
  }

  return cypherString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
  //'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.'

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
  //'Teachers open the door, but you must enter by yourself.'



// itterate over the string and build a new return string
// determine if letter is uppercase or lowercase 
// add 13 to ascii value 
// if value the new value is higher then 'Z' or 'z' subtract 26 from total
// concatinate the character represented by the ascii value to the new string
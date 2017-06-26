function rot13(string) {
  var cypherString = '';
  var isUpperCase;

  var encodeLowerCase = function(ascii) {
    if (ascii + 13 > 122) {
      var valuesFromBeginning = 13 - (122 - ascii);
      return String.fromCharCode(96 + valuesFromBeginning);
    } else {
      return String.fromCharCode(ascii + 13);
    }
  }

  var encodeUpperCase = function(ascii) {
    if (ascii + 13 > 90) {
      var valuesFromBeginnig = 13 - (90 - ascii);
      return String.fromCharCode(64 + valuesFromBeginnig);
    } else {
      return String.fromCharCode(ascii + 13);
    }
  }

  var encodeChar = function(ascii) {
    var cypherChar = ascii + 13;
    if (isUpperCase && cypherChar > 90) {
      cypherChar -= 26;
    } else if (!isUpperCase && cypherChar > 122) {
      cypherChar -= 26;
    }
    return cypherChar;
  }

  for (var i = 0; i < string.length; i++) {
    var asciiCode = string.charCodeAt(i);

    if (asciiCode >= 65 && asciiCode <= 90) {
      isUpperCase = true;
      cypherString += encodeChar(asciiCode);
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      isUpperCase = false;
      cypherString += encodeChar(asciiCode);
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
// add 13 to ascii value if value will be higher then z add remaining
// to a value
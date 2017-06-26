function rot13(string) {
  var cypherString = '';

  var encodeLowerCase = function(ascii) {
    if (ascii + 13 > 122) {
      var valuesFromA = 12 - (122 - ascii);
      return String.fromCharCode(97 + valuesFromA);
    } else {
      return String.fromCharCode(ascii + 13);
    }
  }

  var encodeUpperCase = function(ascii) {
    if (ascii + 13 > 90) {
      var valuesFromA = 12 - (90 - ascii);
      return String.fromCharCode(65 + valuesFromA);
    } else {
      return String.fromCharCode(ascii + 13);
    }
  }

  for (var i = 0; i < string.length; i++) {
    var asciiCode = string.charCodeAt(i);

    if (asciiCode >= 65 && asciiCode <= 90) {
      cypherString += encodeUpperCase(asciiCode);
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      cypherString += encodeLowerCase(asciiCode);
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
// // Ddaaiillyy ddoouubbllee

// function crunch(str) {
//   // var formattedStr = '';
//   // for (var i = 0; i < str.length; i++) {
//   //   if (str[i] !== str[i + 1]) {
//   //     formattedStr += str[i];
//   //   }
//   // }
//   // return formattedStr;

//   return str.replace(/(\w)\1+/g, '$1');
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));        // 'daily double'
// console.log(crunch('4444abcabccba'));                  // '4abcabcba'
// console.log(crunch('ggggggggggggggg'));                // 'g'
// console.log(crunch('a'));                              // 'a'
// console.log(crunch(''));                               // ''

// bannerizer

function logInBox(phrase) {
  var numDashes = phrase.length + 2;
  console.log('+' + '-'.repeat(numDashes) + '+');
  console.log('|' + ' '.repeat(numDashes) + '|');
  console.log('| ' + phrase + ' |');
  console.log('|' + ' '.repeat(numDashes) + '|');
  console.log('+' + '-'.repeat(numDashes) + '+');
}


logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('To boldly go where no one has gone before. Test longer string.');
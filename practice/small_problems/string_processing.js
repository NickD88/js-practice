// Uppercase Check

function isUppercase(str) {
  return str === str.toUpperCase();
  // return !str.match([/a-z/])
}


// console.log(isUppercase('t'));          // false
// console.log(isUppercase('T'));          // true
// console.log(isUppercase('Four Score')); // false
// console.log(isUppercase('FOUR SCORE')); // true
// console.log(isUppercase('4SCORE!'));    // true
// console.log(isUppercase(''));           // true

// Delete Vowels

function removeVowels(wordArr) {
  return wordArr.map(function(word) {
    return word.replace(/[aeiou]/gi,'');
  });
}

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));             // ['bcdfghjklmnpqrstvwxyz']
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));      // ['grn', 'YLLW', 'blck', 'wht']
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                    // ['BC', '', 'XYZ']console.log(


// Lettercase Counter

function letterCaseCount(str) {
  var count = {
    'lowercase': 0,
    'uppercase': 0,
    'neither': 0,
  }

  str.split('').forEach(function(el) {

    if(/[A-Z]/.test(el)) {
      count.uppercase += 1;
    } else if (/[a-z]/.test(el)) {
      count.lowercase += 1;
    } else {
      count.neither += 1;
    }
  });
  return count;
}


// console.log(letterCaseCount('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));   // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));        // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));           // { lowercase: 0, uppercase: 0, neither: 0 }


// Capitalize Words

function wordCap(str) {
  return str.split(' ').map(function(word) {
    word.toLowerCase();
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

// console.log(wordCap('four score and seven'));    // 'Four Score And Seven'
// console.log(wordCap('the javaScript language')); // 'The Javascript Language'
// console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'


// Swap Case

function swapcase(str) {
  return str.split('').map(function(char) {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}


// console.log(swapcase('CamelCase'));         // 'cAMELcASE'
// console.log(swapcase('Tonight on XYZ-TV')); // 'tONIGHT ON xyz-tv'


// Staggered Caps Pt 1

function staggeredCase(str) {
  return str.split('').map(function(char, idx) {
    if (char.match(/[^a-zA-Z]/)) { return char; }
    return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}


// console.log(staggeredCase('I Love Launch School!'));     // 'I LoVe lAuNcH ScHoOl!'
// console.log(staggeredCase('ALL_CAPS'));                  // 'AlL_CaPs'
// console.log(staggeredCase('ignore 77 the 444 numbers')); // 'IgNoRe 77 ThE 444 NuMbErS'


// Staggered Caps Part 2

function staggeredCase2(str) {
  var letterCount = 0;
  return str.split('').map(function(char) {
    if (char.match(/[^a-zA-Z]/)) { return char; }

    if (char.match(/[a-z]/i)) { 
      letterCount +=1; 
    }
    
    return letterCount % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
  }).join('');
}

// console.log(staggeredCase2('I Love Launch School!'));     // 'I lOvE lAuNcH sChOoL!'
// console.log(staggeredCase2('ALL CAPS'));                  // 'AlL cApS'
// console.log(staggeredCase2('ignore 77 the 444 numbers')); // 'IgNoRe 77 ThE 444 nUmBeRs'

// How Long are you

function wordLengths(sentence) {
  if (sentence.length === 0) { return []; }

  var words = sentence.split(' ');
  return words.map(function(word){
    return word + ' ' + String(word.length);
  });
}


// console.log(wordLengths('cow sheep chicken'));
// // result
// // ['cow 3', 'sheep 5', 'chicken 7']

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // // result
// // ['baseball 8', 'hot 3', 'dogs 4', 'and 3', 'apple 5', 'pie 3']

// console.log(wordLengths('It ain\'t easy, is it?'));
// // result
// // ['It 2', 'ain\'t 5', 'easy, 5', 'is 2', 'it? 3']

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // result
// // ['Supercalifragilisticexpialidocious 34']

// console.log(wordLengths(''));
// // result
[]


// Search Word Part 1

function searchWord(selection, text) {
  if (arguments.length < 2 || selection.length === 0) {
    return 0;
  }

  var reg = new RegExp(`\\b${selection}\\b`, 'gi');
  var matches = text.match(reg);
  return matches ? matches.length : 0;

  // return text.split(' ').filter(function(word) {
  //   return word.toLowerCase() === selection.toLowerCase();
  // }).length;
}


// var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
// console.log(searchWord('sed', text)  === 3); // true


// search word part 2

function highlightWord(selection, text) {
  if (arguments.length < 2 || selection.length === 0) {
    return 0;
  }

  var reg = new RegExp(`\\b${selection}\\b`, 'gi');
  return text.replace(reg, '**' + selection.toUpperCase() + '**')


  // return text.split(' ').map(function(word) {
  //   if (word.toLowerCase() === selection.toLowerCase()) {
  //     return '**' + word.toUpperCase() + '**';
  //   } else {
  //     return word;
  //   }
  // }).join(' ');
}


// var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

// console.log(highlightWord('sed', text));
// // result
// '**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

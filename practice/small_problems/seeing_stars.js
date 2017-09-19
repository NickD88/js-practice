/* 
input: integer of maximum stars wide and high
output: string with stars and new line characters


each row will have 3 stars with varying spaces inbeween
exception is the middle row which has n number of stars

create an 8 point star with n stars wide and n stars high
- number of spaces in each row = n - 3
- middle row is n stars
- first row is row 0 (0 spaces before firt star)
  - middle spaces = total spaces / 2
- second row 1 space before star
  - middle spaces between stars = total spaces - 2(row) / 2
- continue until row = (n - 1) / 2
- make copy of array and reverse it for bottom half
- push the middle row of n '*'s in to the top half array and concat with the bottom half array
- join the array with new line character


algorithm

determine length of top half array (n - 1) / 2
use a for loop to itterate through each index
 - each row will consist of 3 stars and n - 3 spaces
 - total spaces = n - 3
 - formula for each row: starting i = 0
    leading spaces = i
    middle spaces = total space - (i * 2) / 2
    store the string in each index representng each row:
    - leading spaces '*' middle spaces '*' middle spaces '*'
    once top half is full make a copy and reverse the array for the bottom half
    concationate the top half of the array with the middle line of n '*' and the bottom half
    join array with '\n' new line character
*/

function star(width) {
  if ( width < 7 || width % 2 === 0 ) {
    return 'Invalid Input';
  }

  var numSpaces = width - 3;
  var topHalf = new Array((width -1) / 2);
  var leadingSpaces, middleSpaces, row, bottomHalf;

  for (var i = 0; i < topHalf.length; i++) {
    leadingSpaces = i;
    middleSpaces = (numSpaces - (i * 2)) / 2;
    row = ' '.repeat(leadingSpaces) + '*' + (' '.repeat(middleSpaces) + '*').repeat(2);
    topHalf[i] = row;
  }  
  
  bottomHalf = topHalf.slice(0).reverse();
  topHalf.push('*'.repeat(width));
  return topHalf.concat(bottomHalf).join('\n');
}

console.log(star(5)); // invalid
console.log(star(0)); // invalid
console.log(star(10));  // invalid

console.log(star(7));
/* 

*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
*/

console.log(star(9));

/*
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/
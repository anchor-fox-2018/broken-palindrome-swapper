/*
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  // debugger;
  for (var i = 0; i < str.length-1; i++) {
    let newStr = '';
    if(isPalindrome(str)){
      return 'TRUE'
    }
    for (var j = 0; j < str.length; j++) {
      console.log('i: ' + i);
      console.log('j: ' + j);
      if (i === j) {
        newStr += str[j+1];
        newStr += str[j];
        j++;
      } else {
        newStr += str[j];
      }
    }
    console.log(newStr);
    if (isPalindrome(newStr)){return 'TRUE'} ;
     
  }
  return 'FALSE';
}

/*
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  if (str.split('').reverse().join('') === str){
    return true
  }
  // console.log(str.split('').reverse().join());
  return false;
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
// console.log(isPalindrome('katak'));

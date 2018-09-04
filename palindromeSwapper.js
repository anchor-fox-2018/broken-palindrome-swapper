function palindromeSwapper(str) {
  let newStr = '';
  for (var i = 0; i < str.length; i++) {
    // debugger;
    for (var j = 0; j < str.length; j++) {
      if (i === j) {
        debugger;
        newStr += str[j + 1];
        // console.log('newStr+j = ', newStr)
        debugger;
        newStr += str[i];
        // console.log('newStr+i = ', newStr)
        // console.log(newStr);
        j++;
      } 
      else {
        newStr += str[j];
      }
    }
    if (isPalindrome(newStr)) return true;
  }
  return false;
}

function isPalindrome(str) {
  if (str.split('').reverse().join('') === str) return true;
  // return console.log(false);
    return false;  
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
console.log(palindromeSwapper('recacar3')); // FALSE
console.log(palindromeSwapper('civic')); // TRUE
console.log(palindromeSwapper('REDDER')); // TRUE

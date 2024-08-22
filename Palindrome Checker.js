function palindrome(str) {
  let newStr = str.replace(/[-_/:()@#\s*,.|]/ig, '');
  let revStr = '';
  for (let i=newStr.length-1;i>=0;i--) {
    revStr += newStr[i]
  }
  return newStr.toLowerCase() == revStr.toLowerCase();
}

console.log(palindrome("five|\_/|four"));
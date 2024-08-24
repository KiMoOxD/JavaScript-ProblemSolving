function rot13(str) {

  let arr = str.split(' ');
   return arr.map((elem) => {
    let arr2 = elem.split('');
    return arr2.map((el,i,array) => {
      let regex = /[a-zA-Z]/ig
      let m = 13;
      regex.test(String.fromCharCode((el.charCodeAt(0)+13)%97)) ? m=13:m=-13;
      // console.log(m)
     return el = el.charCodeAt(0)>=65 && el.charCodeAt(0)<=90 ? '' +  String.fromCharCode(el.charCodeAt(0)+m) : el;
    }).join('')
  }).join(' ')
}

console.log(rot13("SERR CVMMN!"));
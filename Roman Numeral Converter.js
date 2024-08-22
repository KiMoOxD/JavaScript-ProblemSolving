function convertToRoman(num) {
  const numerals = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M'

  }
  let nstr = ''+num;
  let str = [];
  let strf = '';
  let div = 10, div2=0;
  let temp = 0;

  for (let i=0;i<nstr.length;i++) {
    temp = num % div2 ? num % div - num % div2 : num % div;
    console.log(temp)
    if (temp) {
      if (numerals[temp]) {
        str.push(numerals[temp])
      } else {
        for (let i=0;i<(temp/ (div/10));i++) {
          str.push(numerals[temp/(temp/ (div/10))])
        }
  
      }
    }
    div *= 10;
    div2=div/10;
  }

  for (let i=str.length-1;i>=0;i--) {
    strf += str[i];
  }

 return strf;
}

console.log(convertToRoman(60));
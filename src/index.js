const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};
const DEC10 = 10;
const DEC2 = 2;
letterNumber = (len, dec) => len / dec;

function decomp(item, dec) {
  const arr = [];
  const numb = letterNumber(item.length, dec);
  for (let i = 0; i < numb; i++) {
    arr.push(item.substr(i * dec, dec))
  }
  return arr
}

function decode(expr) {
  const result = [];
  let arr = decomp(expr, DEC10);
  arr.map(item => decomp(item, DEC2)).map(i => { k = (i.filter(item => item !== '00').map(i => { if (i === '10') return '.'; else if (i === '11') return '-'; else return ' ' }).join('')); if (MORSE_TABLE[k]) result.push(MORSE_TABLE[k]); else result.push(' ') });
  return result.join('');
}

module.exports = {
  decode
}

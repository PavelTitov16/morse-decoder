const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let myArray = [];
    let subMassive = [];
    let result = [];

    for (let i = 0; i < expr.length; i += 10) {
        myArray.push(expr.slice(i, i + 10) );
    }

    for (let j = 0; j < myArray.length; j ++) {
        subMassive.push(myArray[j].replace(/10/gi, "-").replace(/11/gi, ".").replace(/0/gi, "").replace(/\*{10}/gi, " ") );
    }

    subMassive.forEach((element) => {
        result.push(MORSE_TABLE[element]);
      })

      return result.join("");
    }
    
module.exports = {
    decode
}
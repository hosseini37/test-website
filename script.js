// منطق ماشین‌حساب
let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'خطا';
    }
}

// منطق کد مورس
const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.'
};

function convertToMorse() {
    let input = document.getElementById('morseInput').value.toUpperCase();
    let output = '';
    for (let char of input) {
        if (morseCode[char]) {
            output += morseCode[char] + ' ';
        } else if (char === ' ') {
            output += '  ';
        }
    }
    document.getElementById('morseOutput').innerText = output || 'متن معتبر وارد کنید';
}

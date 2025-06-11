let firstNumber = 0;
let secondNumber = 0;
let action = '+';
let answer = 0;

let input = document.getElementById('calc-input');
let calculationSpan = document.getElementById('calculation');
const showHistoryBtn = document.getElementById('show-history');
const historyBlock = document.querySelector('.calculator .history-items');

let history = [];

function onNumberClick(number) {
    if (input.value === '0') {
        input.value = number;
    } else {
        input.value += number;
    }
}

function onActionClick(clickedAction) {
    let lastThreeChars = input.value.slice(-3);
    let hasActionAtEnd = /^ [+\-x\/] $/.test(lastThreeChars);
    
    if (hasActionAtEnd) {
        input.value = input.value.slice(0, -3) + ' ' + clickedAction + ' ';
    } else {
        input.value += ' ' + clickedAction + ' ';
    }

    action = clickedAction;
}

function onCountClick() {
    let splitted = input.value.split(' ');

    if (splitted.length < 3) {
        return;
    }
    
    firstNumber = parseFloat(splitted[0]);
    action = splitted[1];
    secondNumber = parseFloat(splitted[2]);

    calculateAnswer();

    input.value = answer.toString();

    calculationSpan.innerText = `${firstNumber} ${action} ${secondNumber}`;

    addToHistory();
}

function calculateAnswer() {
    switch (action) {
        case '+':
            answer = firstNumber + secondNumber;
            break;
        case '-':
            answer = firstNumber - secondNumber;
            break;
        case 'x':
            answer = firstNumber * secondNumber;
            break;
        case '/':
            answer = firstNumber / secondNumber;
            break;
        default:
            answer = 0;
    }
}

function onCleanClick() {
    input.value = '';
    firstNumber = 0;
    secondNumber = 0;
    action = '+';
    answer = 0;
    calculationSpan.innerText = '';
}

function addToHistory() {
    let historyItem = {
        firstNumber,
        action,
        secondNumber,
        answer: answer.toString()
    };
    history.push(historyItem);
}

showHistoryBtn.addEventListener('click', () => {
    if (historyBlock.style.display === 'none' || historyBlock.style.display === '') {
        // Rodyti istoriją
        let formatted = history.map(item => `<p>${item.firstNumber} ${item.action} ${item.secondNumber} = ${item.answer}</p>`);
        historyBlock.innerHTML = formatted.join('');
        historyBlock.style.display = 'block';
        showHistoryBtn.innerText = 'Slėpti istoriją';
    } else {
        // Slėpti istoriją
        historyBlock.style.display = 'none';
        showHistoryBtn.innerText = 'Rodyti istoriją';
    }
});

function onDotClick() {
    let parts = input.value.split(' ');
    let lastPart = parts[parts.length - 1];

     if (lastPart && !isNaN(lastPart) && !lastPart.includes('.')) {
        input.value += '.';
    }
}
let firstNumber = 0;
let secondNumber = 0;
let action = '+';
let answer = 0;

let input = document.getElementById('calc-input');
let calculationSpan = document.getElementById('calculation-span');

function onNumberClick(number) {
    input.value += number;
}

function onActionClick(clickedAction) {
    input.value += ' ' + clickedAction + ' ';
    action = clickedAction;
}

function onCountClick() {
    let splitted = input.value.split(' ');
    firstNumber = parseInt(splitted[0]);
    action = splitted[1];
    secondNumber = parseInt(splitted[2]);

    calculateAnswer();
    input.value = answer;
}

function calculateAnswer() {
    switch (action) {
        case '+':
            answer = firstNumber + secondNumber;
            break;
        case '-':
            answer = firstNumber - secondNumber;
            break;
        case '*':
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
}

// WHAT THE USER IS CURRENTY TYPING AS TEXT
let typedNumberText = '';

// THE NUMBER OF WE STORE FOR CALCULATIONS
let storedNumber = null;

// THE OPERATOR CURRENTLY SELECTED (+-*/)
let storedOperator = '';

// USED ONLY FOR DISPLAYING THE HISTORY LINE 
let historyPart = [];


// HELPER FUNCTIONS

function setStatus(message) {
    document.getElementById('statusLine').textContent = message;
}

function showSymbol(op) {
    if (op === '*') return '×';
    if (op === '/') return '÷';
    if (op === '+') return '+';
    if (op === '-') return '−';
    return op;
}

function updateScreen() {
    const display = document.getElementById('displayLine');
    const history = document.getElementById('historyLine');
    const status = document.getElementById('statusLine');

    if (typedNumberText !== '') {
        display.textContent = typedNumberText;
    } else {
        display.textContent = '0';
    }


    if (historyPart.length === 0) {
        history.textContent = '';
    }

    if (historyPart.length === 1) {
        history.textContent = historyPart[0];
    }

    if (historyPart.length === 2) {
        history.textContent = historyPart[0] + ' ' + showSymbol(historyPart[1]);
    }

    if (historyPart.length === 3) {
        history.textContent = historyPart[0] + ' ' + showSymbol(historyPart[1]) + ' ' + showSymbol(historyPart[2]);
    }
    
    if(status.textContent === '') status.textContent = 'Ready';{

}




function pressNumber(digit) {
    setStatus('');
    if (typedNumberText === '0') {
        typedNumberText = digit;
    } else {
        typedNumberText = typedNumberText + digit;
    }

    updateScreen();
}

function pressOperator(op) {
    setStatus('');



    if (typedNumberText === '' && storedNumber === null) {
        setStatus('Please enter a number first');
        updateScreen();
        return;
    }
    if (storedNumber === null) {
        storedNumber = Number(typedNumberText);
        currentOperator = op;
        historyPart = [String(storedNumber), currentOperator]
        typedNumberText = '';
        updateScreen();
    }

    if (typedNumberText !== '') {
        const secondNumber = Number(typedNumberText);

    if (currentOperator === '/' && secondNumber === 0) {
        setStatus('Error: Division by zero');
        updateScreen();
        return;
    }
}



function clearAll() {
    typedNumberText = '';
    storedNumber = null;
    currentOperator = '';
    historyPart = [];
    setStatus('Cleared');
    updateScreen();
}
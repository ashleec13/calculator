
// WHAT THE USER IS CURRENTY TYPING AS TEXT
let typedNumberText = '';

// THE NUMBER OF WE STORE FOR CALCULATIONS
let storedNumber = null;

// THE OPERATOR CURRENTLY SELECTED (+-*/)
let storedOperator = '';

// USED ONLY FOR DISPLAYING THE HISTORY LINE 
let historyPart = [];


// HELPER FUNCTIONS

function setStatus(message){
    document.getElementById('statusLine').textContent = message;
}

function showSymbol(op){
    if (op === '*') return '×';
    if (op === '/') return '÷';
    if (op === '+') return '+';
    if (op === '-') return '&#x2212;';
    return op;
}

function updateScreen(){
    const display = document.getElementById('displayLine');
    const history = document.getElementById('historyLine');
    const status = document.getElementById('statusLine');
    display.textContent = typedNumberText;
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
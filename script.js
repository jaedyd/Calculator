let tempInput = '0';
let previousDisplayValue = '0';
let sign = '+';

function appendToTempInput(value) {
    if (tempInput.charAt(0) == '0') {
        tempInput = tempInput.slice(1)
    }
    tempInput += value;
    updateDisplay(tempInput);
}

function appendToTempSign(value) {
    if (previousDisplayValue == 0) {
        calculateResult()
    }
    sign = value;
    return;
}

function clearTempInput() {
    tempInput = '0';
    sign = '+'
    previousDisplayValue = 0; // Set display value to 0
    resetDisplayValue();
}

function updateDisplay(val) {
    document.getElementById('display').value = val;
}

function resetDisplayValue() {
    document.getElementById('display').value = 0;
}

function calculateResult() {
    try {
        const result = eval(previousDisplayValue + sign + tempInput);
        if (isNaN(result) || !isFinite(result)) {
            document.getElementById('display').value = 'Error';
        } else {
            updateDisplay(result);
            previousDisplayValue = result;
            tempInput = '0';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function deleteLastCharacter() {
    if (tempInput.length > 0) {
        tempInput = tempInput.slice(0, -1);
        if (tempInput == '') {
            tempInput = '0';
        }
    } else if (sign.length > 0) {
        sign = sign.slice(0, -1);
    }
    updateDisplay(tempInput);
}

function toggleSign() {
    if (tempInput == '0') {
        previousDisplayValue = previousDisplayValue * -1;
        document.getElementById('display').value = previousDisplayValue;
    }
    else {
        tempInput = tempInput * -1;
        updateDisplay(tempInput);
    }
}
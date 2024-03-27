/* INICIALIZE VARIABLES TO STORE THE CURRENT AND THE RESULT DISPLAY */
let currentDisplay = "0";
let resultDisplay = false;

/* FUNCTION TO ADD A VALUE TO THE CURRENT DISPLAY */
function addValueDisplay(value) {

    if (currentDisplay === "0") {
        /* if the current display is 0 or the result is already displayed, replace it with the new value */
        currentDisplay = value;
    } else {
        /* otherwise, concatenate the new value to the current display */
        currentDisplay += value;
    }
    /* reset the variable to false to add a new value */
    resultDisplay = false;

    /* update the display to show the new value */
    updateDisplay();
}

/* FUNCTION TO UPDATE  */
function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.value = currentDisplay;
}

/* FUNCTION TO CALCULATE AND DISPLAY THE RESULT */
function calculateResult() {

    try {
        /* create a variable to store the result and use eval() to evaluate the mathematical expression */
        const result = eval(currentDisplay)

        /* show the result to the currentDisplay */
        currentDisplay = result.toString();

        /* Update the display with the error message */
        updateDisplay();
    }
    catch (error) {
        /* if there is an error, set this message in the curentDisplay */
        currentDisplay = "Error";

        /* Update the display with the error message */
        updateDisplay();
    }

    /* set the resultDisplay in TRUE to indicate that the value is displayed */
    resultDisplay = true;
}

/* FUNCTION TO CLEAR THE DISPLAY */
function clearDisplay() {
    /* reset the variables to default */
    currentDisplay = "0";
    resultDisplay = false;

    /* Update the display with the error message */
    updateDisplay();
}
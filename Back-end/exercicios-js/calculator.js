// Studying JavaScript and English to practice both languages human and pc
const input = require("readline-sync");
const express = require("express")
const app = express()

app.use(express.json())

let result    = { // Object for operation and numbers
    '+': (number1,number2) => number1 + number2,
    '-': (number1,number2) => number1 - number2,
    '*': (number1,number2) => number1 * number2,
    '/': (number1,number2) => number2 === 0 ? "Cannot divide by zero" : number1 / number2
                            // restrict this ternary operation to a single line
}

function calc() { // function for calculating numbers and return input user
    let number1   = Number(input.question("Enter number one: "));
    let operation = input.question("Enter the operation: ");
    let number2   = Number(input.question("Enter number two: "));
    
    const valid  = result[operation]; // Access for object
    if (!valid) {
        console.log("Invalid operation")
        }
        console.log(number1 + " " + operation + " " + number2 + " = " + valid(number1,number2));
    return {number1,number2,operation}
    }

while (true) {
    let value = calc();
    const exit = input.question("Want to leave? (type [exit]): ");
    if (exit === "exit") break;
    const history = input.question("Would you like to view your history? ([yes][no])")
    historyJson = {
        number1Register: value.number1,
        operationRegister: value.operation,
        number2Register: value.number2
    }; // {number1Register: 9, operationRegister: '+', number2Register: 1}

    historyJson = JSON.stringify(historyJson) // Saving JSON format

    if (history === "yes") {
        let formatjsonhistory = historyJson
        for (let i = 1 ; 1 <= formatjsonhistory.length ; i++) {
            console.log(formatjsonhistory[1])
        }
    }
}
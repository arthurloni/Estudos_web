// Studying JavaScript and English to practice both languages human and pc
const input = require("readline-sync");

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
    }

while (true) {
    calc();
    const exit = input.question("Want to leave? (type [exit]): ");
    if (exit === "exit") break;
    // Create logic to store a history of what was entered in a JSON file.
}
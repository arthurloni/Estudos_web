// Studying JavaScript and English to practice both languages human and pc
const input = require("readline-sync");

let result = { // Object for operation and numbers
    '+': (number1, number2) => number1 + number2,
    '-': (number1, number2) => number1 - number2,
    '*': (number1, number2) => number1 * number2,
    '/': (number1, number2) => number2 === 0 ? "Cannot divide by zero" : number1 / number2
    // Restrict this coalescence operator operation to a single line
}

function inputCalc() { // function for calculating numbers and return input user
    let number1 = Number(input.question("Enter number one: "));
    let operation = input.question("Enter the operation: ");
    let number2 = Number(input.question("Enter number two: "));

    let resultCalc = validCalc(result, number1, number2, operation)

    return { number1, number2, operation, resultCalc }
}

function validCalc(result, number1, number2, operation) {

    if (!(operation === 'constructor') && !(operation === 'Object')) {
        const valid = result[operation]; // Access for object

        if ((!valid?.name) || (Number.isNaN(number1) || Number.isNaN(number2))) {
            console.log("Invalid operation or Invalid Number.")
            return false
        } else {
            console.log(number1 + " " + operation + " " + number2 + " = " + result[operation](number1, number2));
            return result[operation](number1, number2)
        }
    } else {
        let valueValidOperation = false
        return valueValidOperation
    }
}

const history = [];

while (true) {
    const value = inputCalc();

    if ((!value?.operation) || (Number.isNaN(value.number1) || Number.isNaN(value.number2)) || (Number.isNaN(value.resultCalc))) {
        continue;
    } else {
        if (value.resultCalc != false) {
            history.push(value);
        }
    }
    
    const showHistory = input.question("Would you like to view your history? ([yes][no]) ").trim().toLowerCase();
    if (showHistory === "yes") {
        history.forEach((item, i) => {
            console.log(`${i + 1}: ${item.number1} ${item.operation} ${item.number2} = ${item.resultCalc}`);
        });
    }

    const exit = input.question("Want to leave? (type [exit]): ").trim().toLowerCase();
    if (exit === "exit") break;
}
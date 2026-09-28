const input = require("readline-sync");

let number1   = 0;
let number2   = 0;
let operation = "\n";

number1   = Number(input.question("Enter number one: "));
operation = input.question("Enter the operation: ");
number2   = Number(input.question("Enter number two: "));

while (true) {
    switch (operation) {
        case "+":
            console.log(number1 + " + " + number2 + " = " + (number1+number2));
            break;
        case "x":
        case "*":
            console.log(number1 + " x " + number2 + " = " + (number1*number2));
            break;
        case "-":
            console.log(number1 + " - " + number2 + " = " + (number1-number2));
            break;
        case "/":
            console.log(number1 + " / " + number2 + " = " + (number1/number2));
            break;
        default:
            console.log("The number 0 is not divisible.");
    }
    let exit = input.question("want to leave: (enter [exit])")
    if (exit === "exit") {
        break;
    } else {
        // criar função de pergunta para chamar de forma mais pratica.
    }
}
import { Calculator } from "./class-calculator.mjs";

const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
};

const calc = new Calculator(operations);
calc.savehistory();
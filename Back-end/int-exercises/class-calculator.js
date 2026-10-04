// Author: Arthur Loni
// Date: 03/10/2026
// Version: v24.19.0
// Description:
// Transforming my calculator code with a function in the class,
// working with OOP -> (Object-Oriented Programming).
import input from "readline-sync";

export class Calculator {
    constructor(operations, history = []) {
        this.history    = history
        this.operations = operations
    }

    inputCalc() {
        const number1   = Number(input.question("Enter number one: "));
        const operation = input.question("Enter the operation: ");
        const number2   = Number(input.question("Enter number two: "));

        const resultCalc = this.validCalc(number1, number2, operation)
        return { number1, number2, operation, resultCalc };
    }

    validCalc(number1,number2,operation) {
        let valid;
        if (Object.hasOwn(this.operations, operation)) { // processing prototype input (constructor, object...)
            valid = this.operations[operation]; 
        } else {
            valid = undefined;
        }

        if (!(operation === 'constructor') && !(operation === 'Object')) {

            if ((!valid?.name) || (Number.isNaN(number1) || Number.isNaN(number2))) {
                console.log("Invalid operation or Invalid Number.")
                return false
            } else {
                console.log(number1 + " " + operation + " " + number2 + " = " + this.operations[operation](number1, number2));
                return this.operations[operation](number1, number2)
            }
        } else {
            let valueValidOperation = false
            return valueValidOperation
        }
    }

    validhistory(value) {

        value = this.inputCalc()

        if ((!value?.operation) || (Number.isNaN(value.number1) || Number.isNaN(value.number2)) || (Number.isNaN(value.resultCalc))) {
            return false
        } else {
            if (value.resultCalc != false) {
                this.history.push(value);
            }
        }
    } 

    savehistory(showHistory,exit) {
        while (true) {
            
            this.validhistory()

            showHistory = input.question("Would you like to view your history? ([yes][no]) ").trim().toLowerCase();
            if (showHistory === "yes") {
                this.history.forEach((item, i) => {
                    console.log(`${i + 1}: ${item.number1} ${item.operation} ${item.number2} = ${item.resultCalc}`);
                });
            }

            exit = input.question("Want to leave? (type [exit]): ").trim().toLowerCase();
            if (exit === "exit") break;
        }
    }
}
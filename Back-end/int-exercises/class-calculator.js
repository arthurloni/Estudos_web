// Author: Arthur Loni
// Date: 03/10/2026
// Version: v24.19.0
// Description:
// Transforming my calculator code with a function in the class,
// working with OOP -> (Object-Oriented Programming).
const input = require("readline-sync");

export class Calculator {
    constructor(number1,number2,operation,result,resultCalc,valid,value,showHistory,exit) { // Special method
        this.number1     = number1 
        this.number2     = number2
        this.operation   = operation
        this.result      = result
        this.resultCalc  = resultCalc
        this.valid       = valid
        this.value       = value
        this.showHistory = showHistory
        this.exit        = exit
    }

    // 
    inputCalc(number1,number2,operation,result,resultCalc) {
        number1 = Number(input.question("Enter number one: "));
        operation = input.question("Enter the operation: ");
        number2 = Number(input.question("Enter number two: "));

        resultCalc = validCalc(result, number1, number2, operation)

        return { number1, number2, operation, resultCalc }
    }

    validCalc(number1,number2,operation,result,valid) {
        if (!(operation === 'constructor') && !(operation === 'Object')) {
            valid = result[operation]; // Access for object

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

    validhistory(value) {

        value = self.validCalc()

        if ((!value?.operation) || (Number.isNaN(value.number1) || Number.isNaN(value.number2)) || (Number.isNaN(value.resultCalc))) {
            return false
        } else {
            if (value.resultCalc != false) {
                history.push(value);
            }
        }
    } 

    savehistory(showHistory,exit) {
        while (true) {
            
            this.validhistory()

            showHistory = input.question("Would you like to view your history? ([yes][no]) ").trim().toLowerCase();
            if (showHistory === "yes") {
                history.forEach((item, i) => {
                    console.log(`${i + 1}: ${item.number1} ${item.operation} ${item.number2} = ${item.resultCalc}`);
                });
            }

            exit = input.question("Want to leave? (type [exit]): ").trim().toLowerCase();
            if (exit === "exit") break;
        }
    }
}

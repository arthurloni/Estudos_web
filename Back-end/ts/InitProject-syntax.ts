// My first code in Typescript, don't have used for languagem
// além the languagem, object on studying english
// Supporting materials:  
// DeepL -> translating into English + studying
// https://learnxinyminutes.com/typescript/ -> Learn something in a minute


// Variable declaration, three types, 
// in First (Boolean): 
let logic: boolean = false
// second (Numeric):
let numeric: number = 10
// third (string):
let name: string = "Arthur Loni"

console.log("1° = " + logic + "\n2° = " + numeric + "\n3° = " + name)

// When it's impossible to know (any)
let IsDone: any = false;
IsDone = "Arthur";
IsDone = 10;

// typing for declaration 

var one: number = 10;
let two: string = "dez";
const three: string = "dez";
//const = "onze" -> It is not possible when the value is fixed (const)

// =========================================================================

//Example of a TypeScript function using a typed variable declared at the beginning
function UpdateColor(colorUser) {
    let color: string = colorUser
    if (color.toUpperCase() != "red") return "Color and Red";
}
const colorUser: string = "GREEN"
console.log(UpdateColor(colorUser));

// Using interface

interface Register { // Whats interface?
    name: string;
    adress: string;
    phone: string;
}

class Point {
    x: number;

    constructor(x: number, public y: number = 0) {this.x = x;};

    dist() { return Math.sqrt(this.x * this.x + this.y * this.y); }

    static origin = new Point(0, 0);
}

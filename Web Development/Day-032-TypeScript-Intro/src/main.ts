let ax = 10;    // takes implicitely -->> let a: number = 10;
console.log(ax);
// giving error saying, the variable a and b are declare in js file also ==>>  
// Cannot redeclare block-scoped variable 'a'.ts(2451)
// main.ts(1, 5): 'a' was also declared here.
// let a: number

let by = "TypeScript";  // takes implicitely -->> let b: string = "TypeScript";
console.log(by);
// Cannot redeclare block-scoped variable 'b'.ts(2451)
// main.js(5, 5): 'b' was also declared here.
// let b: string

let cz; 
//  Variable 'c' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7043)
// let c: any
cz = 10;
console.log(cz);
cz = "Hello";
console.log(cz);

// >>>>>>  Data types in TS <<<<<<<<<<
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n; // big integer

let s: string = "Hii";
let b: boolean= true;
let nu:null   = null;
let a: any    = 30;
a = "Hello";

let list: number[] = [1, 2, 3];
list.push(4);
let list1: (number | string)[] = [1, "2", "3", 4]
let list2: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(x[0].substring(1));  // OK
// console.log(x[1].substring(1));  //Property 'substring' does not exist on type 'number'.

interface User {
    name: string;
    age?: number;
}
let user:User = {
    name: "John",
    age: 36,
}
let user2:User = {
    name: "John",
}
console.log(user); //{name: "John", age: 36}
console.log(user2);  //{name: "John"}

// >>>>>>> CLASSES <<<<<<<<<<<<
class App{
    printHello(){
        console.log("Inside first class!!!");
    }
}

const app = new App();
app.printHello();

// >>>>>>> CUSTOM DATA TYPE <<<<<<<<<<<
type Door = "open" | "close";
let door:Door = "open";
// door = "none"; //Type '"none"' is not assignable to type 'Door'.ts(2322)
// let door: Door

// >>>>>>> FUNCTION <<<<<<<<<<
function add(a:number, b:number):number{ // 'number' outside of bracket is for return type
    return a+b;
    // return "a+b"; // Unreachable code detected.ts(7027)
// Type 'string' is not assignable to type 'number'.
}
console.log(add(1, 2));
// console.log(add(1, "2")); // Argument of type 'string' is not assignable to parameter of type 'number'.



export {} // solved the above error. Here we put this file in a module to use separately.


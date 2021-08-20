"use strict";
exports.__esModule = true;
var ax = 10; // takes implicitely -->> let a: number = 10;
console.log(ax);
// giving error saying, the variable a and b are declare in js file also ==>>  
// Cannot redeclare block-scoped variable 'a'.ts(2451)
// main.ts(1, 5): 'a' was also declared here.
// let a: number
var by = "TypeScript"; // takes implicitely -->> let b: string = "TypeScript";
console.log(by);
// Cannot redeclare block-scoped variable 'b'.ts(2451)
// main.js(5, 5): 'b' was also declared here.
// let b: string
var cz;
//  Variable 'c' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7043)
// let c: any
cz = 10;
console.log(cz);
cz = "Hello";
console.log(cz);
// >>>>>>  Data types in TS <<<<<<<<<<
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// let big: bigint = 100n; // big integer
var s = "Hii";
var b = true;
var nu = null;
var a = 30;
a = "Hello";
var list = [1, 2, 3];
list.push(4);
var list1 = [1, "2", "3", 4];
var list2 = [1, 2, 3];
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(x[0].substring(1)); // OK
var user = {
    name: "John",
    age: 36
};
var user2 = {
    name: "John"
};
console.log(user); //{name: "John", age: 36}
console.log(user2); //{name: "John"}
// >>>>>>> CLASSES <<<<<<<<<<<<
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.printHello = function () {
        console.log("Inside first class!!!");
    };
    return App;
}());
var app = new App();
app.printHello();
var door = "open";
// door = "none"; //Type '"none"' is not assignable to type 'Door'.ts(2322)
// let door: Door
// >>>>>>> FUNCTION <<<<<<<<<<
function add(a, b) {
    return a + b;
    // return "a+b"; // Unreachable code detected.ts(7027)
    // Type 'string' is not assignable to type 'number'.
}
console.log(add(1, 2));

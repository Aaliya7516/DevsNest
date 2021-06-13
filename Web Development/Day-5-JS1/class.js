// ## NOTE ## => in js, variables don't have types but values do
var x;
x = 10;
console.log(typeof x); //number
x = 'Hello';
console.log(typeof x); //string

// -=-=-=-=-=-=- typeof operator -=-=-=--=-=-=-

console.log(typeof 42);    //number
console.log(typeof 42.44);    //number
console.log(typeof 'Hiii');    //string
console.log(typeof undefined);    //undefined
console.log(typeof null);    //object  (bug in js)
console.log(typeof true);    //boolean
console.log(typeof false);    //boolean
console.log(typeof {name: 'Riya'});    //object
console.log(typeof [1,2,3]);    //object


//  -=-=-=-=-=-=-=-=- if-else =-=-=-=-=-=--=-=-=-

const xa = 10;
if (xa<10){
    console.log("Lesser");
}else if (xa==10){
    console.log("Equal");
}else{
    console.log('Greater');
}

// -=--=-=-=-=-=- array and for-loop -=--=-=-=-=-=-

const arr = [10,20,30,40,50];
let sum = 0;
for(let i=0; i<arr.length; i++){
    console.log(arr[i], i);
    sum += arr[i];
    console.log(sum);
}

for (item of arr){
    console.log(item);
}

// -=-=-=-=-=-=-=- forEach-loop with function in js -=-=-=-=-=-=-=-

arr.forEach((item, i) =>{
    console.log(item, i);
})

// COERCTION: in js, conversion(type-casting) of data-type of variable is called coerction

var x = '10';
var y = 10;
console.log(x+y); //1010
console.log(Number(x)+y);//coerction -- 20
console.log(parseInt(x)+y);//coerction -- 20
console.log((+x)+y);//coerction -- 20
console.log(typeof x, typeof y);  // string number
console.log(typeof (y+''));   //coerction to string
console.log(typeof (+x));  // coerction to number


//  -=-=-=-=-=-=-=- NaN(Not a Number) -=-=-=-=-=-=-=-

var z = 'I am string';
console.log(z/2);  // NaN
console.log(x/2);  // 5 <- typecasted then performed operation

// -=-=-=-=-=- truthy value and falsy value in js -=-=-=-=-=-

console.log(Boolean(0));    // false
console.log(!!(-0));    // false
console.log(Boolean(NaN));  // false
console.log(!!(null));  // false
console.log(!!(undefined)); // false
console.log(Boolean(false));    // false
console.log(Boolean(''));   // false
console.log(Boolean(""));   // false

if ('a'){
    console.log('data');
}else if (!''){
    console.log("Empty string");
}

console.log(x==y);  // true
console.log(x===y);  //false as it also checks for typeof value

///////////  -=-=-=-=-=-=- SCOPE in JS -=-=-=-=-==-=-=-

// -=-=-=- global scope: accessible in whole program -=-=-=-

var x = 10;
function globalScopeExample(){
    console.log(x); //10
}
globalScopeExample();

// -=-=-=- functional scope: accessible only in function -=-=-=-

function functionalScopeExample(){
    var x = 20;
    console.log(x); // 20
}
functionalScopeExample();

// -=-=-=- block scope: accessible only in block -=-=-=-

if (true){
    let p = 'John';
    console.log(p); // John
}
console.log(p); // Uncaught ReferenceError: p is not defined

// LEXICAL SCOPE: in js, if the colpiler doesn't finds variable in
// current scope, it moves one step to its parent's scope, and then
// again one step to its parent's scope... untill tne vat is found

//  -- let: block level scope
//  -- var: functional level scope
//  -- const: cannot redefine it again after one definition


if (true){
    const px = 'John';
    console.log(px); // John
}
console.log(px); //Uncaught ReferenceError: px is not defined

function functionalScopeExample(){
    const er = 20;
    console.log(x); // 20
}
functionalScopeExample();
console.log(er);  //Uncaught ReferenceError: er is not defined

if (true){
    var pr = 'John';
    console.log(pr); // John
}
console.log(pr);  // John


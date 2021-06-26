// function sum(a,b){ ///functionn declaration
// 	console.log(a+b);
//     // return a+b;
// }
// console.log(sum(2,4));// 6 <br> undefined
// ___________________________________________________________________________________________________
// function sum(a,b){
// 	// console.log(a+b);
//     return a+b;
// }
// console.log(sum(2,4));// 6
// ___________________________________________________________________________________________________
// const sum = function(a, b){ /// function expression
// 	return a+b;
// }
// console.log(sum(1,3));//4
// ___________________________________________________________________________________________________
// const sum = function sumOfTwoNumber(a, b){ /// function expression
// 	return a+b;
// }
// console.log(sum(1,3));//4
// ___________________________________________________________________________________________________
// const sum = (a,b) => console.log(a+b);
// sum(10,2);
// ___________________________________________________________________________________________________
// const sum = (a,b) => {
// 	console.log(a+b);//12
// 	return a+b;
// }
// console.log(sum(10,2));//12
// ___________________________________________________________________________________________________
// const sum = (a=0,b=0) => { ///default param
// 	console.log(a+b);//12
// 	return a+b;
// }
// console.log(sum(10,2));//12
// ___________________________________________________________________________________________________
// -=-=-=-=-=- Call back function -=-=-=-=-=-
// function outer(cb){ ///callback
// 	cb();
// 	console.log("Outer");
// }
// function inner(){
// 	console.log('Inner');
// }
// outer(inner); /// Inner <br> Outer
// ---------------------------------------------------------------------------------------------------
// function outer(a,cb){
// 	const c = cb();
// 	return a + c;
// }
// function inner(){
// 	const b = 10;
// 	return b;
// }
// console.log(outer(20,inner)); //30
// -=-=-=-=- SET TIME OUT -=-=-=-=-=-
// setTimeout(()=> console.log("SetTimeOut Called"), 3000) /// will run after 3 seconds
// ---------------------------------------------------------------------------------------------------
// function greet(name){
// 	console.log('Hello World');
// }
// function sayName(name){
// 	console.log('Hello ' + name);
// }

// setTimeout(greet, 3000, sayName('Rosa')); ///"Hello Rosa" <br 3 seconds> "Hello World"
//___________________________________________________________________________________________________
// -=-=-=-=- arrow functon v/s simple function -=-=-=-=-

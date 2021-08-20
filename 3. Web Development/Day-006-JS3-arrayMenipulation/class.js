a1 = [10, 1, 12, 30, 46];
b1 = [6,7,8,9];
c1 = [1,1,1,1]

console.log(a1[3]); //  o/p: 30 // accessing element
console.log(a1.concat(b1)); // o/p: [10, 1, 12, 30, 46, 6, 7, 8, 9] // to concate
console.log(a1.join("")); // o/p: 101123046 // to join
console.log(a1.slice(1,3)); // o/p: [1,12] //slices the array from starting index to 1-ending index
console.log(c1.indexOf(30)); // o/p: -1
console.log(c1.lastIndexOf(1)); // o/p: 3 // returns the last index of term if present else -1
console.log(a1.some((item)=> item === 30)); // true // returns true if any one of the item returns true else false
console.log(c1.every((item)=> item === 1)); // true // returns true if every items returns true else false
console.log(a1.filter(item => item === 30)); // [30] // filters out the list of elements that returns true
console.log(a1.map(item => item = 12)); // [12, 12, 12, 12, 12] // perform the operation on tne given array
console.log(a1.pop()); // 46 // returns the last element and updates array
console.log(a1); // [10, 1, 12, 30] // last element poped out
console.log(a1.push(29)); // 5 // appends the new element at the end and returns new length of array
console.log(a1); //[10, 1, 12, 30, 29]
console.log(a1.length); // 5 // length of array
console.log(a1.reverse()); // [29, 30, 12, 1, 10]  // reverses the original array
console.log(a1); // [29, 30, 12, 1, 10]
console.log(a1.sort()); // [1, 10, 12, 29, 30] // sorts the original array
console.log(a1.sort((a,b) => b-a)); // [30, 29, 12, 10, 1]  // to sort the list in descending order
console.log(a1.unshift(99)); // 6 // appends the new element at the begining and returns new length of array
console.log(a1); //[99, 30, 29, 12, 10, 1]
console.log(a1.shift()); // 99 // pops out first element
console.log(a1); //  [30, 29, 12, 10, 1]
console.log(Array.isArray(a1)); // true // else false



// -=-=-=-=-=-=-=-  Reduce function -=-=-=-=-=-=-=-=-=-=-

const redFn = a1.reduce((accumulator, item) =>{
    accumulator = accumulator + item;
    return accumulator;
}, 0 )  // 0 is the initial value of accumulator

// -=-=-=-=-=-=-=-  Splice function in array -=-=-=-=-=-=-

// Desc : arr.splice(start, end, ... items to replace...)

a1 = [1,2,3,4,5,6];
console.log(a1.splice(1,3,12,11)); // [2, 3, 4] // item that are being replaced
console.log(a1); // [1, 12, 11, 5, 6] // new array

a1 = [1,2,3,4,5,6];
console.log(a1.splice(1,3,[12,11,10])); //  [2, 3, 4]
console.log(a1); // [1, [12, 11, 10], 5, 6]

a1 = [1,2,3,4,5,6];
console.log(a1.splice(1,3,12)); // [2, 3, 4]
console.log(a1); // [1, 12, 5, 6]



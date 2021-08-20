// 1. Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True
function check(input){
    if (Array.isArray(input)){
        return true
    }else{
        return false
    }
}
console.log(check('w3resource')); // false
console.log(check([1, 2, 4, 0])); // true
console.log(check({'a': 1, 'b':2, 'c':4, 'd':0})); // false

// =========================================================================================

// 2. Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function clone(input){
    return [...input]
}
console.log(clone([1, 2, 4, 0])); // [1, 2, 4, 0]
console.log(clone([1, 2, [4, 0]])); // [1, 2, [4, 0]]

// =========================================================================================

// 3. Write a JavaScript function to get the first element of an array. Passing a 
// parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function first(input, val){
    if (val){
        if (val > input.length){
            return input;
        }else{
            return input.splice(0, val);
        }
    }else{
        return input.shift();
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// =========================================================================================

// 4. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

console.log('"'+ ["Red", "Green", "White", "Black"].join(', ') + '"');

// =========================================================================================

// 5. Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function frequent(input) {
    let maximum = 0;
    let value = input[0];
    let hashmap = {};
    for (let i = 0; i < input.length; i++) {
      let element = input[i];
      if (hashmap[element]) {
        hashmap[element] += 1;
        if (hashmap[element] > maximum) {
          maximum = hashmap[element];
          value = element;
        }
      } else {
        hashmap[element] = 1;
        if (hashmap[element] > maximum) {
          maximum = hashmap[element];
          value = element;
        }
      }
    }
    console.log(hashmap);
    return value + " ( " + maximum + " times )";
  }
  console.log(frequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));

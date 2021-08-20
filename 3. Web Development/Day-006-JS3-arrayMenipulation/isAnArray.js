function isAnArray(input) {
  // console.log(input)

  // if (typeof(input)=='object'){
  //     return true;
  // }
  // return false;
  return Array.isArray(input);
}

console.log(isAnArray("w3resource"));
console.log(isAnArray([1, 2, [4, 0]]));
console.log(isAnArray({ 2: "23" }));
function arrayClone(input) {
  // let copyArray;
  // copyArray=input;
  // return copyArray;
  let copy = [];
  for (i of input) {
    copy.push(i);
  }
  return copy;
}
console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));

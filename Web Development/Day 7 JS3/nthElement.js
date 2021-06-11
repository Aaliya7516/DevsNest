function nthElement(input, n = 0) {
  if (n == 0) {
    return input[0];
  } else if (n < 0) {
    return [];
  } else {
    if (n > input.length) {
      return input;
    }
    let newArray = [];
    for (let i = 0; i < n; i++) {
      newArray.push(input[i]);
    }
    return newArray;
  }
}

console.log(nthElement([7, 9, 0, -2], 1));
console.log(nthElement([], 3));
console.log(nthElement([7, 9, 0, -2], 3));
console.log(nthElement([7, 9, 0, -2], 6));
console.log(nthElement([7, 9, 0, -2], -3));

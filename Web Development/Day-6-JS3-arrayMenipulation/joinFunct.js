function join(input) {
  //Alternatively input.join() could have been used
  let newString = "";
  for (let i = 0; i < input.length - 1; i++) {
    newString += input[i] + ",";
  }
  newString += input[input.length - 1];
  return newString;
}

console.log(join(["Red", "Green", "White", "Black"]));
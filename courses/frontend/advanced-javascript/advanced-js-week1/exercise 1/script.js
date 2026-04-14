let numbers = [1, 2, 3, 4];

let newNumbers = numbers
  .filter((number) => number % 2 !== 0)
  .map((number) => number * 2);

console.log(newNumbers); // [2, 6]

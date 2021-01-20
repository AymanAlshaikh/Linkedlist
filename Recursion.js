let numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

function sum(numbers) {
  let total = 0;
  numbers.forEach((number) => {
    if (typeof number === "number") total += number;
    else total += sum(number);
  });
  /*for (let i = 0; i <= numbers.length; i++) {
    if (typeof numbers[i] === "number") total += numbers;
    else total += sum(numbers);
  }*/
  return total;
}
let summation = sum(numbers);
console.log(summation);

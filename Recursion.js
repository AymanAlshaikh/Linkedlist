let numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];
let total = 0;
function sum(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.length == 0) {
      return 0;
    } else {
      total = numbers.pop(0) + sum(numbers[i]);
      return total;
    }
  }
}
let summation = sum(numbers);
console.log(summation);

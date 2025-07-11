const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  if (number === 0) return 1; // Handle factorial(0)

  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }

  return arr.reduce((acc, num) => acc * num, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

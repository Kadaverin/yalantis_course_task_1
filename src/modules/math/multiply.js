export const multiply = (a, b) => a * b;

export const multiplyAll = (...nums) => nums.reduce(multiply, 1);

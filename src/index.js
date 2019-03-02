import memoization from './modules/memoization';

const sum = (a, b) => a + b;

console.log(memoization(sum)(1,2))
console.log(memoization(sum)(1,2))

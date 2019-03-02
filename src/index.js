import memoization from './modules/memoization';
import { addAll, multiplyAll } from './modules/math';

let res;
const memoizedAddAll = memoization(addAll);
const memoizedMultiplyAll = memoization(multiplyAll);

res = memoizedAddAll(1,2);
console.log(res);

res = memoizedAddAll(1,2);
console.log(res);
console.log('_______________________________________________');

res = memoizedAddAll(1, 2, 3, 4);
console.log(res);

res = memoizedAddAll(1, 2, 3, 4);
console.log(res);
console.log('_______________________________________________');

res = memoizedMultiplyAll(1, 2, 3, 4);
console.log(res);

res = memoizedMultiplyAll(1, 2, 3, 4);
console.log(res);



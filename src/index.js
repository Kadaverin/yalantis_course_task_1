import memoization from './modules/memoization';
import { addAll, multiplyAll } from './modules/math';
import { Game, Monster, Gladiator } from './modules/game';

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

console.log('\n');

// GAME DEMO
const monster = new Monster('Cthulhu', 40, 'Tentacles');
const gladiator = new Gladiator('Ben', 30, 'Blade');
const game = new Game(gladiator, monster);
game.play();

console.log(`Winner: ${ game.winner }`)


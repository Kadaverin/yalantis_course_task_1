import { IWarriorFightLogger } from './IWarriorFightLogger';

export class WarriorFightLogger implements IWarriorFightLogger {
  logBlock(who: string): void {
    console.log(`%c ${ who } blocked attack!`, 'color: teal');
  }

  logAttack(who: string, target: string, attackType: string): void {
    console.log(`${ who } attacks ${ target } with ${ attackType }`);
  }

  logDamage(target: string, points: number): void {
    console.log(`%c ${ target } has damaged by ${ points } points`, 'color: red');
  }
};

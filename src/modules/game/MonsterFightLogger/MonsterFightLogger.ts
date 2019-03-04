import { IMonsterFightLogger } from './IMonsterFightLogger';
import { WarriorFightLogger } from './../WarriorFightLogger';

export class MonsterFightLogger extends WarriorFightLogger implements IMonsterFightLogger {
  logMonsterIsAngry(monsterName: string): void {
    console.log(`%c ${ monsterName } is angry!`, 'color: red; font-weight: bold');
  }
}
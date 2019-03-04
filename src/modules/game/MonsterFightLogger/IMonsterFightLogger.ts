import { IWarriorFightLogger } from './../WarriorFightLogger';

export interface IMonsterFightLogger extends IWarriorFightLogger {
  logMonsterIsAngry(monsterName:string): void;
}
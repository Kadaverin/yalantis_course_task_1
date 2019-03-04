import { IWarriorFightLogger } from './../WarriorFightLogger';

export interface IWarrior {
  hp: number;
  readonly attackType: string;
  readonly name: string;
  readonly isDead: boolean;
  fightLogger?: IWarriorFightLogger;
  attack: (enemy: IWarrior) => void;
  receiveDamage: (damage: number) => void;
  isAttackBlocked: () => boolean;
  generateDamagePoints: () => number;
  toString(): string;
};

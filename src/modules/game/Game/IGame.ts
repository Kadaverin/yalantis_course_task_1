import { IWarrior } from './../Warrior';

export interface IGame {
  warriorA: IWarrior;
  warriorB: IWarrior;
  winner: IWarrior;
  play() : void;
}
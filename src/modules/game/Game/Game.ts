import { IGame } from './IGame';
import { IWarrior } from './../Warrior';

export class Game implements IGame {
  warriorA : IWarrior;
  warriorB : IWarrior;
  winner : IWarrior = null;

  constructor(warriorA: IWarrior, warriorB: IWarrior) {
    this.warriorA = warriorA;
    this.warriorB = warriorB;
  }

  play(): void {
    console.log(`%c ${ this.warriorA } vs ${ this.warriorB } \n`, 'font-weight: bold');
    
    while(true) {
      this.warriorA.attack(this.warriorB);

      if(this.warriorB.isDead) {
        this.winner = this.warriorA;
        break;
      }

      this.warriorB.attack(this.warriorA);

      if(this.warriorA.isDead){
        this.winner = this.warriorB;
        break;
      }
    }
  }
}
import { Warrior } from './../Warrior';

export class Gladiator extends Warrior {
  isAttackBlocked() {
    return Math.random() >= 0.4;
  }

  toString(){
    return `Gladiator ${ this.name }`
  }
}

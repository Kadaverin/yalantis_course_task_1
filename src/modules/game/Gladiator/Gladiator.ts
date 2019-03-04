import { Warrior } from './../Warrior';

export class Gladiator extends Warrior {
  readonly name: string;
   
  isAttackBlocked(): boolean {
    return Math.random() >= 0.4;
  }

  toString(): string {
    return `Gladiator ${ this.name }`;
  }
}

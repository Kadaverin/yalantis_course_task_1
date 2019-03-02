import { Warrior } from './../Warrior';

export class Monster extends Warrior {
  constructor(name, hp, attackType){
    super(name, hp, attackType);
  }
}
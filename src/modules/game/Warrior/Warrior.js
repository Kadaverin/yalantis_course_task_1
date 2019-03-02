import { getattackAmount } from './../Utils/attack';

export class Warrior {
  constructor(name, hp, attackType) {
    this.hp = hp;
    this.name = name;
    this.attackType = attackType;
  }

  getDamage(amount){
    this.hp -= amount;
  }

  attack(target){
    const attackPoints = getattackAmount();
    target.getDamage(attackPoints);
  }
}
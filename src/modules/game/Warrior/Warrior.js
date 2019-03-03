import { randomInteger } from './../Utils/attack';

export class Warrior {
  constructor(name, hp, attackType) {
    this.hp = hp;
    this.name = name;
    this.attackType = attackType;
  }

  get isDead() {
    return this.hp <= 0;
  }

  greeting() {
    console.log(`Helo, I'm ${ this.name }`);
  }

  isAttackBlocked() {
    return Math.random() >= 0.8;
  }

  receiveDamage(points) {
    if(this.isAttackBlocked()) {
      console.log(`%c ${ this } blocked attack!`, 'color: teal');
      return;
    }

    console.log(`%c ${ this } has damaged by ${ points } points`, 'color: red')
   
    this.hp -= points;
  }

  generateDamagePoints() {
    return randomInteger(1, 10);
  }

  attack(target){
    console.log(`${ this } attacks ${ target.name }`);

    const points = this.generateDamagePoints();
    target.receiveDamage(points);
  }

  toString() {
    return `${ this.name }`
  }
}
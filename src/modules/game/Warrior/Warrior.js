import assert from './../../assert';
import { randomInteger } from './../Utils/attack';


export class Warrior {
  constructor(name, hp, attackType) {
    this._validate(name, hp, attackType);

    this.hp = hp;
    this.name = name;
    this.attackType = attackType;
  }

  get isDead() {
    return this.hp <= 0;
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
    console.log(`${ this } attacks ${ target.name } with ${ this.attackType }`);

    const points = this.generateDamagePoints();
    target.receiveDamage(points);
  }

  toString() {
    return `${ this.name }`;
  }

  _generateErrorMsgFormatter(argumentNumber) {
    return (expectedType, receivedType) => (
      `Expected ${ expectedType } for argument ${ argumentNumber }, received: ${ receivedType }`
    );
  } 

  _validate(name, hp, attack) {
    assert(name).is('string', this._generateErrorMsgFormatter(1));
    assert(hp).is('number', this._generateErrorMsgFormatter(2));
    assert(attack).is('string', this._generateErrorMsgFormatter(3));
  }
}

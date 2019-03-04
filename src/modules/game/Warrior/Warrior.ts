import assert from './../../assert';
import { randomInteger } from '../Utils/attack';
import { IWarrior } from './IWarrior';
import { IWarriorFightLogger, WarriorFightLogger } from './../WarriorFightLogger';

// temporary here
type ErrorFormatterFunc = (expectedType: string, receivedType: string) => string;


export class Warrior implements IWarrior {
  hp: number;
  readonly name: string;
  readonly attackType: string;
  protected logger: IWarriorFightLogger;
  

  constructor(
    name: string,
    hp: number,
    attackType: string,
    logger: IWarriorFightLogger = new WarriorFightLogger()
  ) {
    this.validate(name, hp, attackType);

    this.hp = hp;
    this.name = name;
    this.attackType = attackType;
    this.logger = logger;
  }

  get isDead(): boolean {
    return this.hp <= 0;
  }

  isAttackBlocked(): boolean {
    return Math.random() >= 0.8;
  }

  receiveDamage(points: number): void {
    if(this.isAttackBlocked()) {
      this.logger && this.logger.logBlock(this.toString());
      return;
    }

    this.logger && this.logger.logDamage(this.toString(), points);
   
    this.hp -= points;
  }

  generateDamagePoints(): number {
    return randomInteger(1, 10);
  }

  attack(target: IWarrior): void {
    this.logger && this.logger.logAttack(this.toString(), target.name, this.attackType);

    const points = this.generateDamagePoints();
    target.receiveDamage(points);
  }

  toString(): string {
    return `${ this.name }`;
  }

  private generateErrorMsgFormatter(argumentNumber: number): ErrorFormatterFunc {
    return (expectedType: string, receivedType: string): string => (
      `Expected ${ expectedType } for argument ${ argumentNumber }, received: ${ receivedType }`
    );
  } 

  private validate(name: string, hp: number, attack: string) {
    assert(name).is('string', this.generateErrorMsgFormatter(1));
    assert(hp).is('number', this.generateErrorMsgFormatter(2));
    assert(attack).is('string', this.generateErrorMsgFormatter(3));
  }
}

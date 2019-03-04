import { Warrior } from './../Warrior';

export class Monster extends Warrior {
  readonly name: string;

  generateDamagePoints(): number {
    
    let points = super.generateDamagePoints();

    const isAngryHit = Math.random() >= 0.6;

    if(isAngryHit){
      console.log(`%c ${ this } is angry!`, 'color: red; font-weight: bold');
      points *= 2;
    }
    
    return points;
  }

  toString(): string {
    return `Monster ${ this.name }`;
  }
}
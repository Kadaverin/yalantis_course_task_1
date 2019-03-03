import { Warrior } from './../Warrior';

export class Monster extends Warrior {
  generateDamagePoints() {
    let points = super.generateDamagePoints();

    const isAngryHit = Math.random() >= 0.6;

    if(isAngryHit){
      console.log(`%c ${ this } is angry!`, 'color: red; font-weight: bold');
      points *= 2;
    }
    
    return points;
  }

  toString(){
    return `Monster ${ this.name }`
  }
}
import { Warrior } from './../Warrior';
import { MonsterFightLogger, IMonsterFightLogger } from './../MonsterFightLogger';

export class Monster extends Warrior {
  readonly name: string;
  protected logger: IMonsterFightLogger;

  constructor(
    name: string,
    hp: number,
    attackType: string,
    logger: IMonsterFightLogger = new MonsterFightLogger()
  ) {
    super(name, hp, attackType, logger);
  }
  
  generateDamagePoints(): number {
    let points = super.generateDamagePoints();

    const isAngryHit = Math.random() >= 0.6;

    if(isAngryHit){
      this.logger && this.logger.logMonsterIsAngry(this.toString());
      points *= 2;
    }
    
    return points;
  }

  toString(): string {
    return `Monster ${ this.name }`;
  }
}
export interface IWarriorFightLogger {
  logBlock(who: string): void;
  logDamage(target: string, points: number): void;
  logAttack(who: string, target: string, attackType: string): void;
}
export interface IWarrior {
  hp: number;
  
  readonly attackType: string;
  readonly name: string;
  readonly isDead: boolean;

  isAttackBlocked(): boolean;
  attack(target: IWarrior): void;
  receiveDamage(damage: number): void;
  generateDamagePoints(): number;
  toString(): string;
};

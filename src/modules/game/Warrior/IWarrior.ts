export interface IWarrior {
  hp: number;
  readonly attackType: string;
  readonly name: string;
  readonly isDead: boolean;
  attack: (enemy: IWarrior) => void;
  receiveDamage: (damage: number) => void;
  isAttackBlocked: () => boolean;
  generateDamagePoints: () => number;
  toString(): string;
};

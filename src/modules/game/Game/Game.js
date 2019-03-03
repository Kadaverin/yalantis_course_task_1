export class Game {
  constructor(warriorA, warriorB) {
    this.warriorA = warriorA;
    this.warriorB = warriorB;
    this.winner = null;
  }

  play() {
    console.log(`%c ${ this.warriorA } vs ${ this.warriorB } \n`, 'font-weight: bold');
    
    while(true) {
      this.warriorA.attack(this.warriorB);

      if(this.warriorB.isDead) {
        this.winner = this.warriorA;
        break;
      }

      this.warriorB.attack(this.warriorA);

      if(this.warriorA.isDead){
        this.winner = this.warriorB;
        break;
      }
    }
  }
}
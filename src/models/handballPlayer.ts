import { Player } from './player';

export class HandballPlayer extends Player {
  private readonly multiplier = [
    {
      position: 'G',
      initialValue: 50,
      goalMade: 5,
      goalReceived: -2
    },
    {
      position: 'F',
      initialValue: 20,
      goalMade: 1,
      goalReceived: -1
    }
  ]

  goalMade: number;
  goalReceived: number;
  private ratingPointTotal: number = 0;

  constructor(
    playerName: string, nickName: string, number: number,
    teamName: string, position: string, isWinner: boolean, 
    goalMade: number, goalReceived: number, 
  ) {
    super(playerName, nickName, number, teamName, position, isWinner);
    this.goalMade = goalMade;
    this.goalReceived = goalReceived;
  }

  get ratingPoint() {
    return this.ratingPointTotal;
  }

  calculateRatingPoint() {
    if (this.isWinner) {
      this.ratingPointTotal += 10;
    }
    const currentMultiplier: any = this.multiplier.find((query) => query.position === this.position);

    this.ratingPointTotal += currentMultiplier.initialValue + 
      currentMultiplier.goalMade * this.goalMade +
      currentMultiplier.goalReceived * this.goalReceived;

    //console.log(this.ratingPointTotal);
  }



}

import { Player } from './player';

export class BasketballPlayer extends Player {
  private readonly multiplier = [
    {
      position: 'G',
      scoredPoing: 2,
      rebound: 3,
      assist: 1
    },
    {
      position: 'F',
      scoredPoing: 2,
      rebound: 2,
      assist: 2
    },
    {
      position: 'C',
      scoredPoing: 2,
      rebound: 1,
      assist: 3
    }
  ]

  scoredPoint: number;
  rebounds: number;
  assists: number;
  private ratingPointTotal: number = 0;
  constructor(
    playerName: string, nickName: string, number: number,
    teamName: string, position: string, isWinner: boolean, scoredPoint: number,
    rebounds:number, assists:number
  ) {
    super(playerName, nickName, number, teamName, position, isWinner);
    this.scoredPoint = scoredPoint;
    this.rebounds = rebounds;
    this.assists = assists;
  }

  get ratingPoint() {
    return this.ratingPointTotal;
  }

  calculateRatingPoint() {
    if (this.isWinner) {
      this.ratingPointTotal += 10;
    }
    const currentMultiplier: any = this.multiplier.find((query) => query.position === this.position);

    this.ratingPointTotal += currentMultiplier?.assist * this.assists +
      currentMultiplier?.rebound * this.rebounds +
      currentMultiplier?.scoredPoing * this.scoredPoint;
  }
}

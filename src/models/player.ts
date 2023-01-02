export class Player {
  public playerName: string;
  public nickName: string;
  public number: number;
  public teamName: string;
  public position: string;
  public isWinner: boolean;

  constructor(
    playerName: string, nickName: string, number: number,
    teamName: string, position: string,  isWinner: boolean
  ) {
    this.playerName = playerName;
    this.nickName = nickName;
    this.number = number;
    this.teamName = teamName;
    this.position = position;
    this.isWinner =  isWinner;
  }
}

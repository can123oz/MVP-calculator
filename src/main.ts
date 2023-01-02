import { dataReader } from './helpers/fileHelper';
import { BasketballPlayer } from './models/basketballPlayer';
import { HandballPlayer } from './models/handballPlayer';

async function initialize() {
  dataReader().then((result) => {
    const players: any[] = [];

    result.forEach((game) => {
      game.players.forEach((player: string[]) => {
        let playerPoint = 0;

        if (game.title === 'basketball') {
          const basketballPlayer = new BasketballPlayer(
            player[0], player[1], Number(player[2]), player[3],
            player[4],  game.winner === player[3], Number(player[5]),
            Number(player[6]), Number(player[7])
          );
          basketballPlayer.calculateRatingPoint();
          playerPoint = basketballPlayer.ratingPoint;
        } else if (game.title === 'handball') {
          const handballPlayer = new HandballPlayer(
            player[0], player[1], Number(player[2]), player[3],
            player[4], game.winner === player[3], Number(player[5]), Number(player[6]),
          );
          handballPlayer.calculateRatingPoint();
          playerPoint = handballPlayer.ratingPoint;
        }

        players.push({ nickname: player[1], point: playerPoint });
      });
    });


    const cacheData: any = {};
    players.forEach((player: any) => {
      if (typeof cacheData[player.nickname] === 'undefined') {
        cacheData[player.nickname] = player.point;
      } else {
        cacheData[player.nickname] += player.point;
      }
    });
    const grouppedData = [];
    for (let plyr in cacheData) {
      grouppedData.push({ nickname: plyr, point: cacheData[plyr] });
    }
    const mvp = grouppedData.sort((a: any, b: any) => b.point - a.point)[0];
    console.log("MVP:", mvp);
  });
}

initialize();
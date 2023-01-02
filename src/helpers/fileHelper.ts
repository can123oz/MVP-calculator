import * as fs from 'fs';
import * as path from 'path';

export async function dataReader() {
  //const BASE_PATH = path.join(__dirname, '..', '/data');
  const BASE_PATH = path.join(__dirname , '..' , '..' , '/data'); 
  const result: any[] = [];
  const readDirResult = await fs.readdirSync(BASE_PATH);
  await Promise.all(readDirResult.map(async (fileName: string) => {
    const fileResult = await fs.readFileSync(BASE_PATH + '/' + fileName, 'utf8');
    result.push(organizeData(fileResult));
  }));

  return result;
}

function organizeData(data: string) {
  let title = '';
  let players: any = [];
  const teams: any = {};

  const lines = data.trim().split(/\r?\n/);
  lines.forEach((line: string, index: number) => {
    if (index === 0) {
      title = line.trim().toLocaleLowerCase();
    } else {
      const splittedData = line.split(';')
      players.push(splittedData);

      if (typeof teams[splittedData[3]] === 'undefined') {
        teams[splittedData[3]] = Number(splittedData[5]);
      } else {
        teams[splittedData[3]] += Number(splittedData[5]);
      }
    }
  });

  const winnerTeam = Object.keys(teams)
    .sort((a: any, b: any) => teams[b] - teams[a])[0];

  return {
    title,
    players,
    winner: winnerTeam
  };
}

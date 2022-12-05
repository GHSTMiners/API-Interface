import needle from 'needle';
import { SpawnType } from '.';
import { ServerRegion } from './ServerRegion';
import { StatisticCategory, StatisticEntry, HighscoreEntry, GameStatistics, GlobalStatisticEntry, Game } from './Statistics';
import { DetailedWorld, World } from './World';

export class APIInterface {
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public worlds(): Promise<World[]> {
    return needle('get', this.baseUrl + '/world').then(response => {
      return response.body as World[];
    })
  }

  public world(worldID: number): Promise<DetailedWorld> {
    return needle('get', this.baseUrl + '/world/' + worldID).then(response => {
      const detailedWorld: DetailedWorld = response.body;
      detailedWorld.crypto.forEach((crypo) => {
        crypo.spawns.forEach((spawn) => (spawn.type = SpawnType.Crypto));
      });
      detailedWorld.rocks.forEach((rock) => {
        rock.spawns.forEach((spawn) => (spawn.type = SpawnType.Rock));
      });
      detailedWorld.white_spaces.forEach((whiteSpace) => (whiteSpace.type = SpawnType.WhiteSpace));
      return response.body as DetailedWorld;
    });
  }

  public statistic_categories(): Promise<StatisticCategory[]> {
    return needle('get', this.baseUrl + '/statistics/categories').then(response => {
      return response.body as StatisticCategory[];
    });
  }

  public statistics_gotchi(category: StatisticCategory, gotchi: number): Promise<StatisticEntry[]> {
    return needle('post', this.baseUrl + `/statistics/gotchi/${category.id}`, { gotchi_id: gotchi }).then(response => {
      return response.body as StatisticEntry[];
    });
  }

  public highscores(category: StatisticCategory): Promise<HighscoreEntry[]> {
    return needle('get', this.baseUrl + `/statistics/highscores/${category.id}`).then(response => {
      return response.body as HighscoreEntry[];
    });
  }

  public games(wallet_address : string) {
    return needle('get', this.baseUrl + `/statistics/wallet/${wallet_address}`).then(response => {
      return response.body as Game[];
    })
  }

  public game(uuid : string) {
    return needle('get', this.baseUrl + `/statistics/game/${uuid}`).then(response => {
      return response.body as GameStatistics;
    });
  }

  public server_regions(): Promise<ServerRegion[]> {
    return needle('get', this.baseUrl + `/servers/all`).then(response => {
      return response.body as ServerRegion[];
    });
  }

  public server_region(id: number): Promise<ServerRegion> {
    return needle('get', this.baseUrl + `/servers/${id}`).then(response => {
      return response.body as ServerRegion;
    });
  }

  public statistics_global_games(): Promise<Map<number, GlobalStatisticEntry>> {
    return needle('get', this.baseUrl + `/statistics/games`).then(response => {
      let returnData : Map<number, GlobalStatisticEntry> = new Map<number, GlobalStatisticEntry>()
      for(const entry of Object.keys(response.body)) {
        let statsEntry : GlobalStatisticEntry = {
          total: response.body[entry]['total'],
          last_24h: response.body[entry]['24h'],
          last_7d: response.body[entry]['7d']
        }
        returnData.set(Number(entry), statsEntry);
      }
      return returnData;
    });
  }


  baseUrl: string;
}

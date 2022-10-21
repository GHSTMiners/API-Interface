import axios from 'axios';
import { SpawnType } from '.';
import { ServerRegion } from './ServerRegion';
import { StatisticCategory, StatisticEntry, HighscoreEntry, GlobalStatisticEntry } from './Statistics';
import { DetailedWorld, World } from './World';

export class APIInterface {
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public worlds(): Promise<World[]> {
    return axios.get(this.baseUrl + '/world').then((res) => {
      return res.data as World[];
    });
  }

  public world(worldID: number): Promise<DetailedWorld> {
    return axios.get(this.baseUrl + '/world/' + worldID).then((res) => {
      const detailedWorld: DetailedWorld = res.data;
      detailedWorld.crypto.forEach((crypo) => {
        crypo.spawns.forEach((spawn) => (spawn.type = SpawnType.Crypto));
      });
      detailedWorld.rocks.forEach((rock) => {
        rock.spawns.forEach((spawn) => (spawn.type = SpawnType.Rock));
      });
      detailedWorld.white_spaces.forEach((whiteSpace) => (whiteSpace.type = SpawnType.WhiteSpace));
      return res.data as DetailedWorld;
    });
  }

  public statistic_categories(): Promise<StatisticCategory[]> {
    return axios.get(this.baseUrl + '/statistics/categories').then((res) => {
      return res.data as StatisticCategory[];
    });
  }

  public statistics_gotchi(category: StatisticCategory, gotchi: number): Promise<StatisticEntry[]> {
    return axios.post(this.baseUrl + `/statistics/gotchi/${category.id}`, { gotchi_id: gotchi }).then((res) => {
      return res.data as StatisticEntry[];
    });
  }

  public highscores(category: StatisticCategory): Promise<HighscoreEntry[]> {
    return axios.get(this.baseUrl + `/statistics/highscores/${category.id}`).then((res) => {
      return res.data as HighscoreEntry[];
    });
  }

  public server_regions(): Promise<ServerRegion[]> {
    return axios.get(this.baseUrl + `/servers/all`).then((res) => {
      return res.data as ServerRegion[];
    });
  }

  public server_region(id: number): Promise<ServerRegion> {
    return axios.get(this.baseUrl + `/servers/${id}`).then((res) => {
      return res.data as ServerRegion;
    });
  }

  public statistics_global_games(): Promise<Map<number, GlobalStatisticEntry>> {
    return axios.get<any>(this.baseUrl + `/statistics/games`).then((res) => {
      let returnData : Map<number, GlobalStatisticEntry> = new Map<number, GlobalStatisticEntry>()
      for(const entry of Object.keys(res.data)) {
        let statsEntry : GlobalStatisticEntry = {
          total: res.data[entry]['total'],
          last_24h: res.data[entry]['24h'],
          last_7d: res.data[entry]['7d']
        }
        returnData.set(Number(entry), statsEntry);
      }
      return returnData;
    });
  }


  baseUrl: string;
}

import axios from 'axios';
import { SpawnType } from '.';
import { StatisticCategory, StatisticEntry, HighscoreEntry } from './Statistics';
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

  public statistic_categories() : Promise<StatisticCategory[]> {
    return axios.get(this.baseUrl + '/statistics/categories').then((res) => {
      return res.data as StatisticCategory[];
    });
  }

  public statistics_gotchi(category : StatisticCategory, gotchi : number) : Promise<StatisticEntry[]> {
    return axios.post(this.baseUrl + `/statistics/gotchi/${category.id}`, {gotchi_id : gotchi}).then((res) => {
      return res.data as StatisticEntry[];
    });
  }

  public highscores(category : StatisticCategory) : Promise<HighscoreEntry[]> {
    return axios.get(this.baseUrl + `/statistics/highscores/${category.id}`).then((res) => {
      return res.data as HighscoreEntry[];
    });
  }

  baseUrl: string;
}

import axios from 'axios';
import { DetailedWorld, World } from './World';

export default class APIInterface {
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
      return res.data as DetailedWorld;
    });
  }

  baseUrl: string;
}

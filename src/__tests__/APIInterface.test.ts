import APIInterface from '../APIInterface';
import { DetailedWorld } from '../World';

it('Get Worlds', () => {
  let apiInterface: APIInterface = new APIInterface('https://chisel.gotchiminer.rocks/api');
  return apiInterface.worlds().then((worlds) => expect(worlds.length).toBeGreaterThan(0));
});

it('Get detailed world', () => {
  let apiInterface: APIInterface = new APIInterface('https://chisel.gotchiminer.rocks/api');
  return apiInterface.world(6).then((world) => {
    expect(world).toBeTruthy();
  });
});

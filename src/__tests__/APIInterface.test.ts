import { APIInterface } from '../APIInterface';
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

it('Get categories', () => {
  let apiInterface: APIInterface = new APIInterface('https://chisel.gotchiminer.rocks/api');
  return apiInterface.statistic_categories().then((categories) => {
    expect(categories).toBeTruthy();
  });
});

it('Get highscores', () => {
  let apiInterface: APIInterface = new APIInterface('https://chisel.gotchiminer.rocks/api');
  return apiInterface.highscores({ id: 1 }).then((score) => {
    expect(score).toBeTruthy();
  });
});

it('Get global statis', () => {
  let apiInterface: APIInterface = new APIInterface('https://chisel.gotchiminer.rocks/api');
  return apiInterface.statistics_global_games().then((info) => {
    expect(info).toBeTruthy();
  });
});

it('Get game stats', () => {
  let apiInterface: APIInterface = new APIInterface('https://chisel.gotchiminer.rocks/api');
  return apiInterface.game("f4d626eb-c3be-4f06-9483-a490403d257c").then((info) => {
    console.log(info);
    expect(info).toBeTruthy();
  });
});

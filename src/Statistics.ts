export interface StatisticCategory {
  id?: number;
  name?: string;
}

export interface HighscoreEntry {
  gotchi: Gotchi;
  entry: {
    value: number;
  };
}

export interface StatisticEntry {
  game_statistic_category_id: number;
  value: number;
  wallet: Wallet;
  gotchi: Gotchi;
}

export interface Wallet {
  address: string;
  chain_id: number;
}

export interface Gotchi {
  gotchi_id: number;
}

export interface GameStatistics {
  room_id: string;
  statistic_entries: StatisticEntry[]
}

export interface GlobalStatisticEntry {
  total: number
  last_24h: number
  last_7d: number
}

export interface StatisticCategory {
  id?: number;
  name?: string;
}

export interface HighscoreEntry {
  gotchi: Gotchi;
  entry: StatisticEntry;
}

export interface StatisticEntry {
  game_statistic_category_id: number;
  value: number;
  wallet: Wallet;
  gotchi: Gotchi;
}


export interface GameAmountEntry {
  start_date: string;
  end_date: string;
  data_points: Map<string, number>
}

export interface Wallet {
  address: string;
  chain_id: number;
}

export interface Gotchi {
  gotchi_id: number;
}

export interface Game {
  room_id: string;
  world_id: number;
  created_at: string;
}

export interface LogEntry {
  log_file: string;
}

export interface ExtendedGame extends Game  {
  room_id: string;
  log_entry : LogEntry;
  statistic_entries: StatisticEntry[]
}

export interface GlobalStatisticEntry {
  total: number
  last_24h: number
  last_7d: number
}

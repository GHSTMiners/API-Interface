export interface StatisticCategory {
  id?: number
  name?: string
}

export interface HighscoreEntry {
  gotchi : Gotchi
  entry : {
    value:number
  }
}

export interface StatisticEntry {
  value: number
  wallet : Wallet
  gotchi : Gotchi
}

export interface Wallet {
  address: string
  chain_id: number
}

export interface Gotchi {
  gotchi_id: number
}
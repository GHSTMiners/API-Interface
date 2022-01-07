export enum SpawnType {
  None = 0,
  Crypto,
  Rock,
  WhiteSpace,
}

export interface AbstractSpawn {
  type: SpawnType;
}

export interface CryptoSpawn extends AbstractSpawn {
  type: SpawnType.Crypto;
  id: number;
  created_at: Date;
  updated_at: Date;
  world_id: number;
  crypto_id: number;
  starting_layer: number;
  ending_layer: number;
  spawn_rate: number;
}
export interface Background {
  id: number;
  created_at: Date;
  updated_at: Date;
  world_id: number;
  image: string;
  starting_layer: number;
  ending_layer: number;
}
export interface Crypto {
  id: number;
  created_at: Date;
  updated_at: Date;
  world_id: number;
  name: string;
  wallet_address: string;
  weight: number;
  soil_image: string;
  wallet_image: string;
  mining_sound: string;
  spawns: CryptoSpawn[];
}
export interface Soil {
  id: number;
  created_at: Date;
  updated_at: Date;
  world_id: number;
  name: string;
  layers: number;
  dig_multiplier: number;
  top_image: string;
  middle_image: string;
  bottom_image: string;
  order: number;
}
export interface ExplosionCoordinate {
  id: number;
  created_at: Date;
  updated_at: Date;
  explosive_id: number;
  x: number;
  y: number;
}
export interface Explosive {
  id: number;
  created_at: Date;
  updated_at: Date;
  world_id: number;
  name: string;
  soil_image: string;
  inventory_image: string;
  drop_image: string;
  crypto_id: number;
  price: number;
  explosion_sound: string;
  explosion_coordinates: ExplosionCoordinate[];
}
export interface RockSpawn extends AbstractSpawn {
  id: number;
  created_at: Date;
  updated_at: Date;
  world_id: number;
  rock_id: number;
  starting_layer: number;
  ending_layer: number;
  spawn_rate: number;
}
export interface Rock {
  id: number;
  created_at: Date;
  updated_at: Date;
  world_id: number;
  name: string;
  image: string;
  digable: number;
  explodeable: number;
  lava: number;
  spawns: RockSpawn[];
}
export interface Skill {
  id: number;
  created_at: Date;
  updated_at: Date;
  world_id: number;
  name: string;
  description: string;
  minimum: number;
  maximum: number;
  initial: number;
  default: number;
}
export interface Vital {
  id: number;
  created_at: Date;
  updated_at: Date;
  world_id: number;
  name: string;
  minimum: number;
  maximum: number;
  initial: number;
  default: number;
}
export interface World {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  development_mode: number;
  published: number;
  video: string;
  description: string;
  width: number;
  height: number;
}
export interface WhiteSpace {
  type: SpawnType.WhiteSpace;
  id: number;
  created_at: Date;
  updated_at: Date;
  world_id: number;
  background_only: boolean;
  starting_layer: number;
  ending_layer: number;
  spawn_rate: number;
}
export interface DetailedWorld extends World {
  backgrounds: Background[];
  crypto: Crypto[];
  soil: Soil[];
  explosives: Explosive[];
  rocks: Rock[];
  skills: Skill[];
  vitals: Vital[];
  white_spaces: WhiteSpace[];
  consumables: any[];
}

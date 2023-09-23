export enum SpawnType {
  None = 0,
  Crypto,
  Rock,
  WhiteSpace,
  FallThrough,
  Explosive,
  Consumable
}
export interface AbstractSpawn {
  type: SpawnType;
}
export interface CryptoSpawn extends AbstractSpawn {
  type: SpawnType.Crypto;
  id: number;
  crypto_id: number;
  starting_layer: number;
  ending_layer: number;
  spawn_rate: number;
}
export interface UpgradePrice {
  id: number;
  crypto_id: number;
  tier_1: number;
  tier_2: number;
  tier_3: number;
  tier_4: number;
  tier_5: number;
}
export interface UpgradeSkillEffect {
  id: number;
  skill_id: number;
  formula: string;
}
export interface UpgradeVitalEffect {
  id: number;
  vital_id: number;
  formula: string;
}
export interface Upgrade {
  id: number;
  name: string;
  description: string;
  prices: UpgradePrice[];
  skill_effects: UpgradeSkillEffect[];
  vital_effects: UpgradeVitalEffect[];
}
export interface Background {
  id: number;
  image: string;
  starting_layer: number;
  ending_layer: number;
}
export interface Music {
  id: number;
  name: string;
  audio: string;
}
export interface Crypto {
  id: number;
  name: string;
  shortcode: string;
  wallet_address: string;
  weight: number;
  soil_image: string;
  wallet_image: string;
  mining_sound: string;
  spawns: CryptoSpawn[];
}
export interface Building {
  id: number;
  spawn_x: number;
  spawn_y: number;
  video: string;
  activation_sound: string;
  activation_message: string;
  type: string;
  crypto_id: number;
  price: number;
}
export interface Soil {
  id: number;
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
  explosive_id: number;
  x: number;
  y: number;
}
export interface Explosive {
  id: number;
  name: string;
  soil_image: string;
  inventory_image: string;
  drop_image: string;
  crypto_id: number;
  price: number;
  explosion_sound: string;
  mine : boolean;
  ignore_owner: boolean;
  lifespan:number;
  purchase_limit: number;
  spawn_limit:number;
  explosion_coordinates: ExplosionCoordinate[];
}
export interface RockSpawn extends AbstractSpawn {
  id: number;
  rock_id: number;
  starting_layer: number;
  ending_layer: number;
  spawn_rate: number;
}
export interface Rock {
  id: number;
  name: string;
  image: string;
  digable: number;
  explodeable: number;
  lava: number;
  spawns: RockSpawn[];
}
export interface Trait {
  id: number;
  short_name: string;
  name: string;
  blockchain_index: number;
}

export interface Skill {
  id: number;
  name: string;
  description: string;
  minimum: string;
  maximum: string;
  initial: string;
  default: number;
}
export interface Vital {
  id: number;
  name: string;
  minimum: string;
  maximum: string;
  initial: string;
  default: number;
}
export interface FallThroughLayer {
    layer: number;
}
export interface World {
  id: number;
  name: string;
  development_mode: number;
  published: number;
  thumbnail: string;
  teaser : string;
  description: string;
  width: number;
  height: number;
  world_crypto_id: number;

}
export interface WhiteSpace {
  type: SpawnType.WhiteSpace;
  id: number;
  background_only: boolean;
  starting_layer: number;
  ending_layer: number;
  spawn_rate: number;
}

export interface SkillEffect {
  skill_id: number;
  formula: string;
}

export interface VitalEffect {
  vital_id: number;
  formula: string;
}

export interface Consumable {
  id: number;
  name: string;
  description: string;
  image: string;
  crypto_id: number;
  price: number;
  duration: number;
  carry_limit: number;
  purchase_limit: number;
  script: string;
  skill_effects: SkillEffect[];
  vital_effects: VitalEffect[];
}

export interface DetailedWorld extends World {
  backgrounds: Background[];
  crypto: Crypto[];
  buildings: Building[];
  music: Music[];
  soil: Soil[];
  upgrades: Upgrade[];
  explosives: Explosive[];
  rocks: Rock[];
  skills: Skill[];
  vitals: Vital[];
  white_spaces: WhiteSpace[];
  consumables: Consumable[];
  fall_through_layers: FallThroughLayer[];
}

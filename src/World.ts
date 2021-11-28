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
}

export interface DetailedWorld extends World {
  crypto: Crypto[];
  soil: Soil[];
  explosives: Explosive[];
  rocks: Rock[];
  skills: Skill[];
  vitals: Vital[];
  consumables: any[];
}

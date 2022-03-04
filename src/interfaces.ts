import { Model } from 'mongoose'

export interface IUser {
  email: string;
  password: string;
}

export interface IAnimal {
  id: string;
  imageUrl: string;
  popularName: string;
  scientificName: string;
  foodType: 'herbivore' | 'carnivore' | 'omnivorous';
  isInExtinction: boolean;
  lifeWaitMax: number;
  lifeWaitMin: number;
  lifeWaitMeasurementUnity: 'day' | 'month' | 'year';
  mediumHeightMeters: number;
  mediumWeightKg: number;
  generalDescription: string;
  appearsInUrbanLocations: boolean;
  foodDescription?: string;
  heatMapWhereLivesImageUrl?: string
}

export interface IContext {
  isAuthenticatedUser: boolean;
  db: {
    User: Model<IUser>;
    Animal: Model<IAnimal>;
  }
}

export interface ISignInInput {
  email: string;
  password: string;
}

export interface ISignInResponse {
  auhtenticated: boolean;
  token: string;
}

export type ICreateAnimalInput = Omit<IAnimal, 'id'>

export interface IUpdateAnimalInput {
  id: string;
  input: {
    imageUrl?: string;
    popularName?: string;
    scientificName?: string;
    foodType?: 'herbivore' | 'carnivore' | 'omnivorous';
    isInExtinction?: boolean;
    lifeWaitMax: number;
    lifeWaitMin: number;
    lifeWaitMeasurementUnity: 'day' | 'month' | 'year';
    biome: 'caatinga' | 'cerrado' | 'pampa' | 'pantanal' | 'mata atlantica' | 'amazonia';
    mediumHeightMeters?: number;
    mediumWeightKg?: number;
    generalDescription?: string;
    appearsInUrbanLocations?: boolean;
    foodDescription?: string;
    heatMapWhereLivesImageUrl?: string
  }
}

export interface MongooseError {
  code: number;
  keyValue: string;
}
export interface ErrorCodeMapper {
  [key: number]: () => string[];
}

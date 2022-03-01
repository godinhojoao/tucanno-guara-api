
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
  foodType: 'herbivoro' | 'carnivoro' | 'onivoro';
  isInExtinction: boolean;
  lifeWaitInYears: string;
  mediumHeight: number;
  mediumWeight: number;
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

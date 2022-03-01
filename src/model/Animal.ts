import { model, Schema, Model } from 'mongoose'
import { IAnimal } from '../interfaces'

const AnimalSchema: Schema = new Schema({
  imageUrl: { type: String, required: true },
  popularName: { type: String, required: true },
  scientificName: { type: String, required: true },
  foodType: {
    type: String,
    enum: ['herbivoro', 'carnivoro', 'onivoro'],
    required: true
  },
  isInExtinction: { type: Boolean, required: true },
  lifeWaitInYears: { type: String, required: true },
  mediumHeight: { type: Number, required: true },
  mediumWeight: { type: Number, required: true },
  generalDescription: { type: String, required: true },
  appearsInUrbanLocations: { type: Boolean, required: true },
  foodDescription: { type: String, required: false },
  heatMapWhereLivesImageUrl: { type: String, required: false }
})

const Animal: Model<IAnimal> = model('Animal', AnimalSchema)

export { Animal }

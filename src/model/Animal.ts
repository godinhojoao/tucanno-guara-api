import { model, Schema, Model } from 'mongoose'
import { IAnimal } from '../interfaces'

const AnimalSchema: Schema = new Schema({
  imageUrl: { type: String, required: true, unique: true },
  popularName: { type: String, required: true, unique: true },
  scientificName: { type: String, required: true, unique: true },
  foodType: {
    type: String,
    enum: ['herbivoro', 'carnivoro', 'onivoro'],
    required: true
  },
  isInExtinction: { type: Boolean, required: true },
  lifeWait: { type: String, required: true },
  mediumHeightMeters: { type: Number, required: true },
  mediumWeightKg: { type: Number, required: true },
  generalDescription: { type: String, required: true },
  appearsInUrbanLocations: { type: Boolean, required: true },
  foodDescription: { type: String, required: false },
  heatMapWhereLivesImageUrl: { type: String, required: false }
})

const Animal: Model<IAnimal> = model('Animal', AnimalSchema)

export { Animal }

import { model, Schema, Model } from 'mongoose'
import { IAnimal } from '../interfaces'

const AnimalSchema: Schema = new Schema({
  imageUrl: { type: String, required: true, unique: true },
  popularName: { type: String, required: true, unique: true },
  scientificName: { type: String, required: true, unique: true },
  foodType: {
    type: String,
    enum: ['herbivore', 'carnivore', 'omnivorous'],
    required: true
  },
  isInExtinction: { type: Boolean, required: true },
  lifeWaitMin: { type: Number, required: true },
  lifeWaitMax: { type: Number, required: true },
  lifeWaitMeasurementUnity: {
    type: String,
    enum: ['day', 'month', 'year'],
    required: true
  },
  biome: {
    type: String,
    enum: ['caatinga', 'cerrado', 'pampa', 'pantanal', 'mata atlantica', 'amazonia'],
    required: true
  },
  mediumHeightMeters: { type: Number, required: true },
  mediumWeightKg: { type: Number, required: true },
  generalDescription: { type: String, required: true },
  appearsInUrbanLocations: { type: Boolean, required: true },
  foodDescription: { type: String, required: false },
  heatMapWhereLivesImageUrl: { type: String, required: false }
})

const Animal: Model<IAnimal> = model('Animal', AnimalSchema)

export { Animal }

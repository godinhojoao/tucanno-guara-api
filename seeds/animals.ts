import { Animal } from '../src/model/Animal'

export const animalsSeed = async (): Promise<void> => {
  const animals = [
    Animal.create({
      imageUrl: 'https://avatars.githubusercontent.com/u/66435387?s=400&u=01821edf9486716f5cd3cabb4d95c4c48a7d66ea&v=2',
      popularName: 'João Godinho',
      scientificName: 'humano',
      foodType: 'omnivorous',
      isInExtinction: false,
      lifeWait: '1 à 2 anos',
      lifeWaitMax: 1,
      lifeWaitMin: 2,
      lifeWaitMeasurementUnity: 'year',
      biome: 'pampa',
      mediumHeightMeters: 1.76,
      mediumWeightKg: 75.6,
      generalDescription: 'Humano muito legal',
      appearsInUrbanLocations: true,
      foodDescription: 'Come de tudo',
      heatMapWhereLivesImageUrl: null
    })
  ]

  await Animal.deleteMany({})

  animals.forEach(async (animal) => await animal)
}

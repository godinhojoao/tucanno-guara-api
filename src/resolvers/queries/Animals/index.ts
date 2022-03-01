import { ApolloError } from 'apollo-server'
import { IAnimal, IContext } from '../../../interfaces'

const getAnimals = async (
  _: unknown,
  __: unknown,
  { db: { Animal } }: IContext
): Promise<IAnimal[]> => {
  try {
    const animals = await Animal.find()
    console.log('animals', animals)

    return [
      {
        id: '1dasmdoksa',
        imageUrl: 'dale',
        popularName: 'string',
        scientificName: 'string',
        foodType: 'herbivoro',
        isInExtinction: true,
        lifeWaitInYears: '12 à 13 anos',
        mediumHeight: 12,
        mediumWeight: 12,
        generalDescription: 'string',
        appearsInUrbanLocations: false,
        foodDescription: 'string',
        heatMapWhereLivesImageUrl: 'string'
      }
    ]
  } catch (error) {
    return []
  }
}

const getAnimal = async (
  _: unknown,
  { id }: { id: string; },
  { db: { Animal } }: IContext
): Promise<IAnimal | ApolloError> => {
  try {
    const animal = await Animal.findById(id)
    console.log('animal', animal)

    return {
      id: '1dasmdoksa',
      imageUrl: 'dale',
      popularName: 'string',
      scientificName: 'string',
      foodType: 'herbivoro',
      isInExtinction: true,
      lifeWaitInYears: '12 à 13 anos',
      mediumHeight: 12,
      mediumWeight: 12,
      generalDescription: 'string',
      appearsInUrbanLocations: false,
      foodDescription: 'string',
      heatMapWhereLivesImageUrl: 'string'
    }
  } catch (error) {
    return new ApolloError('animal not found', 'not found')
  }
}

export { getAnimals, getAnimal }

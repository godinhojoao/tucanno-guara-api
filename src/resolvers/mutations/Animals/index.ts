import { AuthenticationError } from 'apollo-server'
import { IAnimal, IContext, ICreateAnimalInput } from '../../../interfaces'

const createAnimal = async (
  _: unknown,
  { input: createAnimalInput }: { input: ICreateAnimalInput },
  { isAuthenticatedUser }: IContext
): Promise<IAnimal | AuthenticationError> => {
  if (!isAuthenticatedUser) { return new AuthenticationError('You must be signed in to view this resource.') }

  console.log('createAnimalInput', createAnimalInput)

  return {
    id: '123dksdk',
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
}

export { createAnimal }

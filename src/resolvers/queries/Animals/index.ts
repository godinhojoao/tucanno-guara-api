import { Types } from 'mongoose'
import { ApolloError } from 'apollo-server'
import { IAnimal, IContext } from '../../../interfaces'

const getAnimals = async (
  _: unknown,
  __: unknown,
  { db: { Animal } }: IContext
): Promise<IAnimal[]> => {
  try {
    const animals = await Animal.find()
    return animals as IAnimal[]
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
    const isValidObjectId = Types.ObjectId.isValid(id)
    if (!isValidObjectId) { return new ApolloError('invalid id', 'invalid') }

    const animal = await Animal.findById(id)
    return animal as IAnimal
  } catch (error) {
    return new ApolloError('animal not found', 'not found')
  }
}

export { getAnimals, getAnimal }

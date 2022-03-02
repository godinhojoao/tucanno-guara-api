import { Types } from 'mongoose'
import { ApolloError, AuthenticationError } from 'apollo-server'
import { IAnimal, IContext, ICreateAnimalInput, IUpdateAnimalInput } from './../../../interfaces'
import { mongooseErrorHandling } from './../../../shared/mongooseErrorHandling'

const createAnimal = async (
  _: unknown,
  { input: createAnimalInput }: { input: ICreateAnimalInput; },
  { isAuthenticatedUser, db: { Animal } }: IContext
): Promise<IAnimal | AuthenticationError | ApolloError> => {
  if (!isAuthenticatedUser) { return new AuthenticationError('You must be signed in to view this resource.') }

  const animal = new Animal(createAnimalInput)

  try {
    const savingAnimalResponse = await animal.save()
    return savingAnimalResponse as IAnimal
  } catch (error: any) {
    let [errorMessage, errorCode] = mongooseErrorHandling(error)

    errorMessage = errorMessage || 'could not save'
    errorCode = errorCode || 'error saving'

    return new ApolloError(errorMessage, errorCode)
  }
}

const updateAnimal = async (
  _: unknown,
  { id, input }: IUpdateAnimalInput,
  { isAuthenticatedUser, db: { Animal } }: IContext
): Promise<IAnimal | AuthenticationError | ApolloError> => {
  if (!isAuthenticatedUser) { return new AuthenticationError('You must be signed in to view this resource.') }

  const isValidObjectId = Types.ObjectId.isValid(id)
  if (!isValidObjectId) { return new ApolloError('invalid id', 'invalid') }

  try {
    const animal = await Animal.findByIdAndUpdate(id, input, { new: true })

    if (!animal) { return new ApolloError('animal not found', 'not found') }

    return animal as IAnimal
  } catch (error: any) {
    return new ApolloError('could not update', 'error updating')
  }
}

const deleteAnimal = async (
  _: unknown,
  { id }: { id: string; },
  { isAuthenticatedUser, db: { Animal } }: IContext
): Promise<IAnimal | AuthenticationError | ApolloError> => {
  if (!isAuthenticatedUser) { return new AuthenticationError('You must be signed in to view this resource.') }

  const isValidObjectId = Types.ObjectId.isValid(id)
  if (!isValidObjectId) { return new ApolloError('invalid id', 'invalid') }

  try {
    const animal = await Animal.findByIdAndDelete(id)

    if (!animal) { return new ApolloError('animal not found', 'not found') }

    return animal as IAnimal
  } catch (error: any) {
    return new ApolloError('could not delete', 'error deleting')
  }
}

export { createAnimal, updateAnimal, deleteAnimal }

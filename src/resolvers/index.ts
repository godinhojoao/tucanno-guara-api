import { signIn } from './mutations/SignIn'
import { createAnimal, updateAnimal, deleteAnimal } from './mutations/Animals'
import { getAnimals, getAnimal } from './queries/Animals'

const resolvers = {
  Query: {
    getAnimals,
    getAnimal
  },
  Mutation: {
    signIn,
    createAnimal,
    updateAnimal,
    deleteAnimal
  }
}

export { resolvers }

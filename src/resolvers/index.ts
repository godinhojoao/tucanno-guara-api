import { signIn } from './mutations/SignIn'

import { createAnimal } from './mutations/Animals'
import { getAnimals, getAnimal } from './queries/Animals'

const resolvers = {
  Query: {
    getAnimals,
    getAnimal
  },
  Mutation: {
    signIn,
    createAnimal
  }
}

export { resolvers }

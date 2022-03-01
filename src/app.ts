import { ApolloError, ApolloServer } from 'apollo-server'
import { GraphQLFormattedError } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import { db } from './core/db'
import { validateUserAuthToken } from './shared/validateUserAuthToken'

const schema = makeExecutableSchema({
  typeDefs: [
    typeDefs
  ],
  resolvers
})

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const authorizationToken = req.headers.authorization || ''

    let isAuthenticatedUser = null
    if (authorizationToken) {
      isAuthenticatedUser = validateUserAuthToken(authorizationToken)
    }

    return { isAuthenticatedUser, db }
  },
  formatError: (err): GraphQLFormattedError => {
    console.log('err', err)
    if (err.extensions.code === 'INTERNAL_SERVER_ERROR') {
      return new ApolloError('We are having some trouble', 'ERROR')
    }

    return err
  }
})

server.listen(4000)
  .then(({ url }) => {
    console.log(`Server ready at ${url}`)
  })

export { server }

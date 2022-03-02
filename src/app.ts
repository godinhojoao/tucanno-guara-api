import { ApolloError, ApolloServer } from 'apollo-server'
import { GraphQLFormattedError } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { constraintDirective, constraintDirectiveTypeDefs } from 'graphql-constraint-directive'

import { db } from './core/db'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import { validateUserAuthToken } from './shared/validateUserAuthToken'

let schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    constraintDirectiveTypeDefs
  ],
  resolvers
})
schema = constraintDirective()(schema)

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

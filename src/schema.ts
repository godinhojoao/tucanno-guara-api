import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    getAnimals: [Animal!]
    getAnimal(id: ID!): Animal
  }

  type Mutation {
    signIn(input: signInInput): SignInResponse
    createAnimal(input: createAnimalInput): Animal
  }

  input signInInput {
    email: String!
    password: String!
  }

  type SignInResponse {
    auhtenticated: Boolean!
    token: String
  }

  input createAnimalInput {
    imageUrl: String!
    popularName: String!
    scientificName: String!
    foodType: FoodTypeEnum!
    isInExtinction: Boolean!
    lifeWaitInYears: String!
    mediumHeight: Float!
    generalDescription: String!
    mediumWeight: Float!
    appearsInUrbanLocations: Boolean!
    foodDescription: String
    heatMapWhereLivesImageUrl: String
  }

  type Animal {
    id: ID!
    imageUrl: String!
    popularName: String!
    scientificName: String!
    foodType: FoodTypeEnum!
    isInExtinction: Boolean!
    lifeWaitInYears: String!
    mediumHeight: Float!
    generalDescription: String!
    mediumWeight: Float!
    appearsInUrbanLocations: Boolean!
    foodDescription: String
    heatMapWhereLivesImageUrl: String
  }

  enum FoodTypeEnum {
    herbivoro,
    carnivoro,
    onivoro
  }
`

export { typeDefs }

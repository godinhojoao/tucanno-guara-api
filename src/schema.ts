import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    getAnimals: [Animal!]
    getAnimal(id: ID!): Animal
  }

  type Mutation {
    signIn(input: signInInput!): SignInResponse
    createAnimal(input: createAnimalInput): Animal
    updateAnimal(id: ID!, input: createAnimalInput): Animal
    deleteAnimal(id: ID!): Animal
  }

  type SignInResponse {
    auhtenticated: Boolean!
    token: String
  }

  type Animal {
    id: ID!
    imageUrl: String!
    popularName: String!
    scientificName: String!
    foodType: FoodTypeEnum!
    isInExtinction: Boolean!
    lifeWait: String!
    mediumHeightMeters: Float!
    generalDescription: String!
    mediumWeightKg: Float!
    appearsInUrbanLocations: Boolean!
    foodDescription: String
    heatMapWhereLivesImageUrl: String
  }

  enum FoodTypeEnum {
    herbivoro,
    carnivoro,
    onivoro
  }

  input signInInput {
    email: String! @constraint(format: "email")
    password: String!
  }

  input createAnimalInput {
    imageUrl: String!
    popularName: String! @constraint(maxLength: 50)
    scientificName: String! @constraint(maxLength: 100)
    foodType: FoodTypeEnum!
    isInExtinction: Boolean!
    lifeWait: String! @constraint(maxLength: 16)
    mediumHeightMeters: Float! @constraint(max: 100)
    generalDescription: String! @constraint(maxLength: 1800)
    mediumWeightKg: Float! @constraint(max: 160000)
    appearsInUrbanLocations: Boolean!
    foodDescription: String @constraint(maxLength: 1000)
    heatMapWhereLivesImageUrl: String
  }
`

export { typeDefs }

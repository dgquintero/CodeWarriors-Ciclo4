import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers'

const typeDefs = `
  type Query {
    allUsers: [User]
  }

  type Mutation {
    createUser(input: UserInput):User
    updateUser(_id: ID, input: UserInputUpdate): User
    deleteUser(_id: ID): User
  }

  type User {
    _id: ID!
    full_name: String!
    cc: String!
    email: String!
    password: String!
    user_type: String!
    status: String!
  }

  input UserInput {
    full_name: String!
    cc: String!
    email: String!
    password: String!
    user_type: String!
    status: String!
  }

  input UserInputUpdate {
    full_name: String
    cc: String
    email: String
    password: String
    user_type: String
    status: String
  }
`;


export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})

const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Utensil {
      id: ID!
      title: String!
   }
`

export default typeDefs

const schema = `
type Person {
  id: ID!
  firstname: String!
  lastname: String!
}

type Query {
  persons: [Person!]!
  person(firstname: String!): Person!
}

`
module.exports = {
  schema
}
const schema = `
type Person {
  id: ID!
  firstname: String!
  lastname: String!
  gender: GenderType!
}

enum GenderType {
  MASCULINO
  FEMENINO
}

type Query {
  persons: [Person]
  person(firstname: String!): Person
  getPersonById(id: ID!): Person
}

type Mutation {
  createPerson(data: PersonInput): Person!
}

input PersonInput {
  firstname: String!
  lastname: String!
  gender: GenderType!
}

`;
module.exports = {
  schema
}
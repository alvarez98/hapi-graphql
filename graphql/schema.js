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
  createPerson(data: PersonInput): Person!
}

input PersonInput {
  firstname: String!
  lastname: String!
  gender: GenderType!
}

`;
// type Mutation {
//   createPerson(data: Person!): Person!
// }
module.exports = {
  schema
}
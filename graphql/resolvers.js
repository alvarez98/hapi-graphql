const { persons } = require('../utils/mocks')

const getPerson = function(args, request) {
  const res = persons.filter(person => person.firstname === args.firstname)
  return res[0]
}

const getPersonById = function (args, request) {
   const res = persons.filter(person => person.id === args.id);
   return res[0];
}

const getPersons = function (args, request) {
  return persons;
}

const createPerson = ({ data }, request) => {
    const person = {
      id: persons.length + 1,
      ...data
    }
    persons.push(person);
    return person;
  }

const resolvers = {
  persons: getPersons,
  person: getPerson,
  getPersonById,
  createPerson
};

module.exports = { resolvers }
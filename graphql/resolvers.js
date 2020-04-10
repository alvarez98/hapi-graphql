
const getPerson = function(args, request) {
  return { firstname: "billy", lastname: "jean" };
};


const resolvers = {
  person: getPerson
}

module.exports = { resolvers }
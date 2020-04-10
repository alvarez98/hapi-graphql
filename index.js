require("dotenv").config()
const Hapi = require('hapi')
const Graphi = require('graphi')
const { resolvers } = require('./graphql/resolvers')
const { schema } = require("./graphql/schema.js")

const server = Hapi.server({
  port: process.env.PORT,
  host: "0.0.0.0"
})

const init = async () => {

    await server.register({ plugin: Graphi, options: { schema, resolvers } })
    server.start((err) => {
        if (err) throw err
    })
    console.log("Server running at:", server.info.uri);
} 

init()
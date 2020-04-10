# Hapi.js - GraphQl

## Graphi

Hapi GraphQL server plugin

## Instalación 

Iniciamos un proyecto en Node.js

```sh
npm init --yes
```

Instalamos Hapi y Graphi

```sh
sudo npm i hapi graphi -S
```

## Otros paquetes

```sh
sudo npm i nodemon -D
sudo npm i dotenv -S
```

## Probar server
Query
```sh
curl -X POST "http://localhost:3000/graphql" -H "Content-Type: application/json" -d '{ "query": "query { person(firstname: \"Adolfo\") { lastname } }" }'
```
Mutation* 
```sh
curl -X POST "http://localhost:3000/graphql" -H "Content-Type: application/json" -d '{ "query": "query { createPerson(data: {firstname: \"Esteban\", lastname: \"Sanchez\", gender: MASCULINO}) { id } }" }'

```
## Otras formas de configurar Graphi

GraphQLSchema Instance

```js
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      person: {
        type: GraphQLString,
        args: {
          firstname: { type: GraphQLString }
        },
        resolve: (root, { firstname }, request) => {
          return firstname;
        }
      }
    }
  })
});
 
const server = Hapi.server();
await server.register({ plugin: Graphi, options: { schema } });
```

Hapi Routes (Primera forma)

```js
const schema = `
  type Person {
    firstname: String!
    lastname: String!
  }
 
  type Query {
    person(firstname: String!): Person!
  }
`;
 
 
const server = Hapi.server();
server.route({
  method: 'graphql',
  path: '/person',
  handler: (request, h) => {
    // request.payload contains any arguments sent to the query
    return { firstname: 'billy', lastname: 'jean' };
  }
});
 
await server.register({ plugin: Graphi, options: { schema } });
```

Hapi Routes (Segunda forma)

```js

server.route({
  method: 'POST',
  path: '/person',
  config: {
    tags: ['graphql'],
    handler: (request, h) => {
      // request.payload contains any arguments sent to the query
      return { firstname: 'billy', lastname: 'jean' };
    }
  }
});
```
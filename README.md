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

```sh
curl -X POST "http://localhost:3000/graphql" -H "Content-Type: application/json" -d '{ "query": "query { person(firstname: \"billy\") { lastname } }" }'
```
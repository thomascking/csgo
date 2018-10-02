const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require("graphql-tools");

const path = require('path');

const typeDefs = require("./schema").Schema;
const resolvers = require("./resolvers").Resolvers;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: {
    log: e => console.log(e)
  }
});

var app = express();

app.use(
  "/graphql",
  graphqlHTTP(request => ({
    schema: schema,
    graphiql: true
  }))
);

app.use('/', express.static(path.join(__dirname, 'dist/csgo')));

console.log(path.join(__dirname, 'dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/csgo/index.html'));
});

app.listen(4000);

console.log("Running a GraphQL API server at http://localhost:4000/graphql");

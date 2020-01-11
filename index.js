const graphqlHTTP = require("express-graphql");
const express = require("express");
const { graphql } = require("graphql");

const omdbSchema = require("./schema/schema");

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: omdbSchema
  })
);

app.listen(8080, () => console.log("running express on port 8080"));

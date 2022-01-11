const express = require("express");
const expressGraphQL = require("express-graphql");
const app = express();

app.use(
  "/graphql",
  expressGraphQL.graphqlHTTP({
    graphiql: true,
  })
);

app.listen(5000, () => console.log("Server running"));

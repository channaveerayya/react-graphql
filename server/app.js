const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const mongoose = require("mongoose")
const schema = require("./schema/schema")
const cors = require("cors")

const app = express()

app.use(cors())
mongoose.connect(
  `mongodb+srv://channu:Cbs@1993@cluster0.nlwzm.mongodb.net/Cluster0?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
)

mongoose.connection.once("open", () => [console.log("connected database")])

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }))
app.listen(4000, () => {
  console.info("now listening for requests on port 4000")
})

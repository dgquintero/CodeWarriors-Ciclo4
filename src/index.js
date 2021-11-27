import express from "express"
import { graphqlHTTP } from "express-graphql"
import schema from "./schema"

import { connect } from "./database"


const app = express()
connect();
app.get('/', (req, res)=> {
  res.json({
    message: 'Hello World'
  })
})

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
  context: {
    messageId: 'test'
  }
}));

app.listen(4000, () => {
  console.log('Server listen on port 4000')
})

import express from "express";
// import graphqlHTTP from "express-graphql";
const { graphqlHTTP } = require('express-graphql');
import UserSchema from "./schemas/UserSchema"
import { connect } from "./database";

const app = express();
connect();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    })
});

app.use('/graphql', graphqlHTTP({
    graphiql:true,
    schema: UserSchema,
    context: {
        messageId: 'test'
    }
}));

app.listen(3000, () => console.log('Server on port 3000'))
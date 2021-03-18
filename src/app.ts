import polka from 'polka'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import compression from 'compression'

const app = polka().use(cors()).use(compression())

const typeDefs = `
type Query {
    hello: String
}`

const resolvers = {
    Query: {
        hello: () => 'world'
    }
}

const apollo = new ApolloServer({ typeDefs, resolvers, playground: true })

// @ts-ignore
// does not recognise polka as acceptable
apollo.applyMiddleware({ app, path: '/' })


app.listen(3000, () => {
    console.log('listening!')
})
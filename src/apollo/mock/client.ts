import { InMemoryCache } from "apollo-cache-inmemory"
import ApolloClient from "apollo-client"
import SchemaLink from "apollo-link-schema"
import { addMockFunctionsToSchema, makeExecutableSchema } from "graphql-tools"
import { loader } from "graphql.macro"
import { Query } from "../../graphql/generated/type"

const schema = makeExecutableSchema({
  typeDefs: loader("../../../schema.public.graphql"),
})

const mocks: {
  URI: () => string
  DateTime: () => string
  Query: () => Partial<Query>
} = {
  URI: () => "https://github.com/umetsu",
  DateTime: () => "2020-01-01T00:00:00Z",
  Query: () => ({}),
}

addMockFunctionsToSchema({
  schema,
  mocks,
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema }),
})

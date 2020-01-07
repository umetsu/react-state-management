import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-client"
import { ApolloLink } from "apollo-link"
import { onError } from "apollo-link-error"
import { HttpLink } from "apollo-link-http"

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        )
      }
      if (networkError) {
        console.error(`[Network error]: ${networkError}`)
      }
    }),
    new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }),
  ]),
  cache: new InMemoryCache(),
})

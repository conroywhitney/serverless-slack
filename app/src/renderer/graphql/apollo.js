import ApolloClient, { createNetworkInterface } from 'apollo-client'

// Create the apollo client
export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
    transportBatching: true,
    opts: {
      mode: 'cors'
    }
  })
})

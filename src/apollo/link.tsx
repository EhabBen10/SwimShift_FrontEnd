import { ApolloLink, concat, HttpLink } from '@apollo/client'

const middleware = new ApolloLink((operation, forward) => {
  // Later I think we will get the localstored token and set it inside an authorization header here
  return forward(operation)
})

const httpLink = new HttpLink({
  uri: 'http://localhost:5041/graphql/',
})

const link = concat(middleware, httpLink)

export default link

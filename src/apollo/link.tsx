import { ApolloLink, concat, HttpLink } from '@apollo/client'

const middleware = new ApolloLink((operation, forward) => {
  return forward(operation)
})

const httpLink = new HttpLink({
  uri: `${import.meta.env.VITE_BACKEND_BASE_URL
    }/graphql`,
})

const link = concat(middleware, httpLink)

export default link

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { ApolloProvider } from '@apollo/react-hooks'
import client from './apollo/client.tsx'
import { SideBar } from "./layouts/Sidebar.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <SideBar />

    </ApolloProvider >
  </React.StrictMode>,
)

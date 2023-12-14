import './App.css'
import { ApolloProvider } from '@apollo/react-hooks'
import client from './apollo/client'
import { PageHeader } from './layouts/PageHeader'
import { ShiftGridItem } from './components/ui/ShiftGridItem'

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <div>sidebare</div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            <ShiftGridItem
              Date="2022-01-01"
              Hours="8"
              Time="10:00"
              Description="eionf"
            />
            <ShiftGridItem
              Date="2022-01-01"
              Hours="8"
              Time="10:00"
              Description="eionf"
            />
            <ShiftGridItem
              Date="2022-01-01"
              Hours="8"
              Time="10:00"
              Description="eionf"
            />
            <ShiftGridItem
              Date="2022-01-01"
              Hours="8"
              Time="10:00"
              Description="eionf"
            />
          </div>
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App

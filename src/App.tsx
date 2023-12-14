import './App.css'
import { gql, useQuery } from '@apollo/react-hooks'
import { PageHeader } from './layouts/PageHeader'
import { ShiftGridItem } from './components/ui/ShiftGridItem'
import { Sidebar } from './layouts/SideBar'

export const test = gql`
query GetEvent{
  get{
      description
      start{
          dateTimeDateTimeOffset
      }
      end{
          dateTimeDateTimeOffset
      }
      
  }
}
`
function App() {
  const { data, loading, error } = useQuery(test);
  console.log(data);
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar />
        <div className="col-start-2 grid gap-3 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {data?.get.map((shift: any) => (
            <ShiftGridItem
              Date={shift.start.dateTimeDateTimeOffset}
              Hours="Antale timer: 8"
              Time="Du skal arbejde fra 10:00 til 12:00"
              Description={shift.description}
            />))
          }
        </div>
      </div>
    </div>
  )
}

export default App

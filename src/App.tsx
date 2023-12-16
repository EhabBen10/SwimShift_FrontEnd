import './App.css'
import { gql, useQuery } from '@apollo/react-hooks'
import { PageHeader } from './layouts/PageHeader'
import { Sidebar } from './layouts/SideBar'
import { SideBarProvider } from './context/SideBarcontext'
import { ShiftGridItem } from './components/ui/ShiftGridItem'

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
    <SideBarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
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
      </div>
    </SideBarProvider>
  )
}

export default App

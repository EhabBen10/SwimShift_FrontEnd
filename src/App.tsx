import './App.css'
import { Shifts } from './views/eventsPage/Shifts'

function App() {
  return (
    <Shifts />
    // <div className="max-h-screen flex flex-col">
    //   <PageHeader />
    //   <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
    //     <div className="overflow-x-hidden px-8 pb-4">
    //       <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
    //         {data?.get.map((shift: any) => (
    //           <ShiftGridItem
    //             Date={shift.start.dateTimeDateTimeOffset}
    //             Hours="Antale timer: 8"
    //             Time="Du skal arbejde fra 10:00 til 12:00"
    //             Description={shift.description}
    //           />))
    //         }
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default App

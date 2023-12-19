import { gql } from "apollo-boost";
import { ComboboxForm } from "./ComboboxForm";
import { useState } from "react";
import Calender from "@/components/Calender";

export const test = gql`
query GetEvent($employeeName: String!) {
  get(employeeName: $employeeName){
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

export function Shifts() {
    const [employeeName, setemployeeName] = useState<string>('');

    // const { data, loading, error } = useQuery(test, {
    //     variables: { employeeName: employeeName },
    //     skip: !employeeName,
    // });

    const meetings = [
        {
            id: 1,
            name: 'Leslie Alexander',
            imageUrl:
                'https://scontent.fcph3-1.fna.fbcdn.net/v/t39.30808-1/362293603_6474574605966051_2052022444764834091_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_ohc=V2vCMnm9i4QAX97VHs8&_nc_ht=scontent.fcph3-1.fna&oh=00_AfCkpV_-F0-1lqpYrL6uWLAi7FdopASmFTFMXRVliN2UGw&oe=65860CB4',
            startDatetime: '2023-12-19T13:00',
            endDatetime: '2023-12-19T14:30',
        },
        {
            id: 2,
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            startDatetime: '2023-12-19T13:00',
            endDatetime: '2023-12-19T14:30',
        },
        {
            id: 3,
            name: 'Dries Vincent',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            startDatetime: '2023-12-19T13:00',
            endDatetime: '2023-12-19T14:30',
        },
        {
            id: 4,
            name: 'Leslie Alexander',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            startDatetime: '2023-12-19T13:00',
            endDatetime: '2023-12-19T14:30',
        },
        {
            id: 1,
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            startDatetime: '2023-12-19T13:00',
            endDatetime: '2023-12-19T14:30',
        },
    ]
    return (
        <>
            <div className="p-4 sm:ml-64">
                <ComboboxForm onSubmit={setemployeeName} />
                <Calender shifts={meetings} />
                {/* <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-10">
                    {data?.get.map((shift: any) => (
                        <ShiftGridItem
                            Date={shift.start.dateTimeDateTimeOffset}
                            Hours="Antale timer: 8"
                            Time="Du skal arbejde fra 10:00 til 12:00"
                            Description={shift.description}
                        />))
                    }
                </div> */}
            </div>
        </>
    )

}
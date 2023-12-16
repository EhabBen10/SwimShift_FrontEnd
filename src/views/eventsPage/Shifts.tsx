import { gql } from "apollo-boost";
import { ComboboxForm } from "./ComboboxForm";
import { useQuery } from "@apollo/react-hooks";
import { ShiftGridItem } from "@/components/ui/ShiftGridItem";
import { useState } from "react";

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

    const { data, loading, error } = useQuery(test, {
        variables: { employeeName: employeeName },
        skip: !employeeName,
    });
    return (
        <>
            <div className="p-4 sm:ml-64">
                <ComboboxForm onSubmit={setemployeeName} />
                <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-10">
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
        </>
    )

}
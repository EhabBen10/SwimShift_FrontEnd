import { ComboboxForm } from "./ComboboxForm";
import { useState } from "react";
import Calender from "@/components/Calender";
import { useQuery } from "@apollo/react-hooks";
import { getAllShifts, getSpecificName } from "./Queris";

export function Shifts() {
    const [employeeName, setemployeeName] = useState<string>('');

    const { data: allData, loading: allLoading, error: allError } = useQuery(getAllShifts);

    const { data: specificData, loading: specificLoading, error: specificError } = useQuery(getSpecificName, {
        variables: { employeeName },
        skip: !employeeName,
    });

    if (allLoading || (specificLoading && employeeName)) return <p>Loading...</p>;
    if (allError || (specificError && employeeName)) return <p>Error :(</p>;

    const dataToDisplay = employeeName ? specificData?.get : allData?.allShifts;

    const meetings = dataToDisplay.map((event: { creator: { displayName: any; }; start: { dateTimeDateTimeOffset: any; }; end: { dateTimeDateTimeOffset: any; }; }) => ({
        name: event.creator?.displayName || employeeName,
        imageUrl: 'https://scontent.fcph3-1.fna.fbcdn.net/v/t39.30808-1/362293603_6474574605966051_2052022444764834091_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_ohc=V2vCMnm9i4QAX97VHs8&_nc_ht=scontent.fcph3-1.fna&oh=00_AfCkpV_-F0-1lqpYrL6uWLAi7FdopASmFTFMXRVliN2UGw&oe=65860CB4',
        startDatetime: event.start?.dateTimeDateTimeOffset,
        endDatetime: event.end?.dateTimeDateTimeOffset,
    }));
    return (
        <>
            <div className="p-4 sm:ml-64">
                <ComboboxForm onSubmit={setemployeeName} />
                <Calender shifts={meetings} />
            </div>
        </>
    )

}
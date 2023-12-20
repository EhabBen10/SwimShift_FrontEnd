import { ComboboxForm } from "./ComboboxForm";
import { useState } from "react";
import Calender from "@/components/Calender";
import { useQuery } from "@apollo/react-hooks";
import { getAllShifts } from "./Queris";

export function Shifts() {
    const [employeeName, setemployeeName] = useState<string>('');

    const { data, loading, error } = useQuery(getAllShifts);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const meetings = data?.allShifts.map((event: { creator: { id: any; displayName: any; }; start: { dateTimeDateTimeOffset: any; }; end: { dateTimeDateTimeOffset: any; }; }) => ({
        name: event.creator?.displayName || '',
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
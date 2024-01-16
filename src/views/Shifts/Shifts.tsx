import Calender, { shift } from "./components/Calender";
import { ComboboxForm } from "./components/ComboboxForm";
import { useState } from "react";

export type Shiftstype = shift[];

export function Shifts() {
    const [employeeName, setemployeeName] = useState<string>('');

    return (
        <>
            <div className="p-4 sm:ml-64">
                <ComboboxForm onSubmit={setemployeeName} />
                <Calender employeeName={employeeName} />
            </div>
        </>
    )

}
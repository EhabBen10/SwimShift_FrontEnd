import { Button } from "@/components/ui/button";
import Calender from "./components/Calender";
import { ComboboxForm } from "./components/ComboboxForm";
import { useState } from "react";
import { Home, Menu, Search, User } from "lucide-react";

export function Shifts() {
    const [employeeName, setemployeeName] = useState<string>('');
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

    return (
        <>
            <div className="p-4 sm:ml-64">
                <ComboboxForm onSubmit={setemployeeName} />
                <Calender employeeName={employeeName} />
            </div>
        </>
    )

}
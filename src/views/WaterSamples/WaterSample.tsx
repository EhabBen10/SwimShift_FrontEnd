import { CalendarDateRangePicker } from "@/views/WaterSamples/components/date-range-picker";
import { WaterSampleCard } from "./components/WaterSampleCard";

export function WaterSample() {
    return (
        <>
            <div className="p-7 sm:ml-64">
                <CalendarDateRangePicker />
                <WaterSampleCard />
            </div>
        </>
    )
}



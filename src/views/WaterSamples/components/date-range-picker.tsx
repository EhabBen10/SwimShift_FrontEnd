import * as React from "react"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { CalendarIcon, Download, Loader2 } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Calendar } from "../../../components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover"
import { useState } from "react"

export function CalendarDateRangePicker({
    className,
}: React.HTMLAttributes<HTMLDivElement>) {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2024, 0, 20),
        to: addDays(new Date(2024, 0, 20), 20),
    })
    const [loading, setLoading] = useState(false);

    const downloadFile = async () => {
        if (date && date.from && date.to) {
            setLoading(true);
            const downloadUrl = `${import.meta.env.VITE_BACKEND_BASE_URL}/download?startDate=${date.from.toISOString()}&endDate=${date.to.toISOString()}`;
            const response = await fetch(downloadUrl);
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${date.from.toISOString()}-${date.to.toISOString()}.xlsx`;
                document.body.appendChild(a);
                a.click();
                a.remove();
                setLoading(false);
            } else {
                // Handle error
                console.error('Download failed');
            }
        }
    }

    return (
        <div className="space-x-2 mb-4">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"ghost"}
                        className={cn(
                            "w-[260px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
            <Button
                onClick={() => {
                    downloadFile();
                }}
                disabled={loading}
            >
                {loading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{' '}
                        Downloading...
                    </>
                ) : (
                    <>
                        <Download className="mr-2 h-4 w-4" /> Download
                    </>
                )}
            </Button>
        </div >
    )
}

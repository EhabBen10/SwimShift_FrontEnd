import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { ArrowLeftRight, GripVertical, MinusIcon, PlusIcon, User } from 'lucide-react';
import { ComboboxForm } from './ComboboxForm';
import { useState } from 'react';
import { shift } from './Calender';
import { format, parseISO } from 'date-fns';
import { SpecialButton } from '@/components/ui/spcialebutton';


interface ExchangeDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    shiftToExchange: shift;
}

export function ExchangeDrawer(props: ExchangeDrawerProps) {
    const [employeeName, setemployeeName] = useState<string>('');
    const shifts: shift[] = [
        {
            name: "Shift 1",
            imageUrl: "https://example.com/image1.jpg",
            startDatetime: new Date().toISOString(),
            endDatetime: new Date().toISOString(),
        },
        {
            name: "Shift 2",
            imageUrl: "https://example.com/image2.jpg",
            startDatetime: new Date().toISOString(),
            endDatetime: new Date().toISOString(),
        },
        {
            name: "Shift 3",
            imageUrl: "https://example.com/image3.jpg",
            startDatetime: new Date().toISOString(),
            endDatetime: new Date().toISOString(),
        },
        {
            name: "Shift 3",
            imageUrl: "https://example.com/image3.jpg",
            startDatetime: new Date().toISOString(),
            endDatetime: new Date().toISOString(),
        },
        {
            name: "Shift 3",
            imageUrl: "https://example.com/image3.jpg",
            startDatetime: new Date().toISOString(),
            endDatetime: new Date().toISOString(),
        },
        {
            name: "Shift 3",
            imageUrl: "https://example.com/image3.jpg",
            startDatetime: new Date().toISOString(),
            endDatetime: new Date().toISOString(),
        },
        // Add more shifts as needed
    ];


    return (
        <Drawer open={props.isOpen} onClose={props.onClose}>
            <DrawerContent className='h-3/4'>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Hvem vil du bytte med</DrawerTitle>
                    </DrawerHeader>
                    <ComboboxForm onSubmit={setemployeeName} exchangeDrawer={true} />
                    <div className="p-0 pt-4 pb-0 overflow-y-auto h-64">
                        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                            {shifts.map((shift) => (
                                <ShiftToExchange shift={shift} />
                            ))}
                        </ol>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline" onClick={props.onClose}>Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}


function ShiftToExchange({ shift }: { shift: shift }) {
    let startDateTime = parseISO(shift.startDatetime)
    let endDateTime = parseISO(shift.endDatetime)

    return (
        <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
            <td className="pl-5 pr-3 whitespace-no-wrap font-bold">
                <div className="text-black"> {format(new Date(shift.startDatetime), 'dd/MMM')}</div>
                <div>{format(new Date(shift.startDatetime), 'EEE')}</div>
            </td>

            <div className="flex-auto">
                <p className="text-gray-900">{shift.name}</p>
                <p className="mt-0.5">
                    <time dateTime={shift.startDatetime}>
                        {format(startDateTime, 'h:mm a')}
                    </time>{' '}
                    -{' '}
                    <time dateTime={shift.endDatetime}>
                        {format(endDateTime, 'h:mm a')}
                    </time>
                </p>
            </div>
            <SpecialButton variant="default" className="bg-green-400" onClick={() => console.log("hej med dig")}>
                <ArrowLeftRight className="h-5 w-5" />
            </SpecialButton>
        </li>
    )
}
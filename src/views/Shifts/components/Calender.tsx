import { useQuery } from '@apollo/react-hooks'
import { Menu, Transition } from '@headlessui/react'
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
} from 'date-fns'
import { ChevronLeft, ChevronRight, GripVertical, User } from 'lucide-react'
import { Fragment, useState } from 'react'
import { getAllShifts, getSpecificName } from '../Queris'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExchangeDrawer } from './ExchangeDrawer'


function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(' ')
}
export type shift = {
    name: string;
    imageUrl: string;
    startDatetime: string;
    endDatetime: string;
};
type CalendarProps = {
    employeeName?: string;
};

export default function Calender({ employeeName }: CalendarProps) {
    let today = startOfToday()
    let [selectedDay, setSelectedDay] = useState(today)
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

    const { data, loading, error } = useQuery(getAllShifts);
    const { data: specificData, loading: specificLoading, error: specificError } = useQuery(getSpecificName, {
        variables: { employeeName },
        skip: !employeeName,
    });

    if (error) return `Error! ${error.message}`;
    if (specificError) return `Error! ${specificError.message}`;



    let shifts: shift[] = [];
    let dataToUse = (employeeName !== "" && employeeName !== "Alle vagter") ? specificData?.get : data?.allShifts;

    if (dataToUse && Array.isArray(dataToUse)) {
        shifts = dataToUse.map((event) => ({
            name: event.creator?.displayName || employeeName,
            imageUrl: event.gadget?.iconLink,
            startDatetime: event.start?.dateTimeDateTimeOffset,
            endDatetime: event.end?.dateTimeDateTimeOffset,
        }));
    }
    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    })

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    let selectedDayMeetings = shifts.filter((shift) =>
        isSameDay(parseISO(shift.startDatetime), selectedDay)
    )

    const morningShifts = selectedDayMeetings.filter(shift => {
        const startHour = new Date(shift.startDatetime).getHours();
        return startHour >= 5 && startHour < 14;
    });

    const eveningShifts = selectedDayMeetings.filter(shift => {
        const startHour = new Date(shift.startDatetime).getHours();
        return startHour >= 14;
    });
    return (
        <div className="pt-16">
            <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
                <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
                    <div className="md:pr-14">
                        <div className="flex items-center">
                            <h2 className="flex-auto font-semibold text-gray-900">
                                {format(firstDayCurrentMonth, 'MMMM yyyy')}
                            </h2>
                            <button
                                type="button"
                                onClick={previousMonth}
                                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Previous month</span>
                                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                            </button>
                            <button
                                onClick={nextMonth}
                                type="button"
                                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Next month</span>
                                <ChevronRight className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                            <div>S</div>
                            <div>M</div>
                            <div>T</div>
                            <div>O</div>
                            <div>T</div>
                            <div>F</div>
                            <div>L</div>
                        </div>
                        <div className="grid grid-cols-7 mt-2 text-sm">
                            {days.map((day, dayIdx) => (
                                <div
                                    key={day.toString()}
                                    className={classNames(
                                        dayIdx === 0 && colStartClasses[getDay(day)],
                                        'py-1.5'
                                    )}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setSelectedDay(day)}
                                        className={classNames(
                                            isEqual(day, selectedDay) && 'text-white',
                                            !isEqual(day, selectedDay) &&
                                            isToday(day) &&
                                            'text-red-500',
                                            !isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            isSameMonth(day, firstDayCurrentMonth) &&
                                            'text-gray-900',
                                            !isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            !isSameMonth(day, firstDayCurrentMonth) &&
                                            'text-gray-400',
                                            isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                                            isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            'bg-gray-900',
                                            !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                                            (isEqual(day, selectedDay) || isToday(day)) &&
                                            'font-semibold',
                                            'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                        )}
                                    >
                                        <time dateTime={format(day, 'yyyy-MM-dd')}>
                                            {format(day, 'd')}
                                        </time>
                                    </button>

                                    <div className="w-1 h-1 mx-auto mt-1">
                                        {shifts.some((shift) =>
                                            isSameDay(parseISO(shift.startDatetime), day)
                                        ) && (
                                                <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                                            )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <section className="mt-12 md:mt-0 md:pl-14">
                        <h2 className="font-semibold text-gray-900">
                            Tidsplan for{' '}
                            <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                                {format(selectedDay, 'dd MMM, yyy')}
                            </time>
                        </h2>
                        {loading || specificLoading ? (
                            <p>Loading...</p>
                        ) : selectedDayMeetings.length > 0 ? (
                            <>
                                {employeeName !== "" && employeeName !== "Alle vagter" ? (
                                    <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                                        {selectedDayMeetings.map((shift) => (
                                            <Shift shift={shift} />
                                        ))}
                                    </ol>

                                ) : (
                                    <Tabs defaultValue="MorgenVagt" className="font-semibold text-gray-900 mt-2">
                                        <TabsList>
                                            <TabsTrigger value="MorgenVagt" className="w-full">MorgenVagt</TabsTrigger>
                                            <TabsTrigger value="AftenVagt">AftenVagt</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="MorgenVagt">
                                            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                                                {morningShifts.map((shift) => (
                                                    <Shift shift={shift} />
                                                ))}
                                            </ol>
                                        </TabsContent>
                                        <TabsContent value="AftenVagt">
                                            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                                                {eveningShifts.map((shift) => (
                                                    <Shift shift={shift} />
                                                ))}
                                            </ol>
                                        </TabsContent>
                                    </Tabs>
                                )}
                            </>

                        ) : (
                            <p>Du skal ikke arbejde denne dag</p>
                        )}
                    </section>
                </div>
            </div>
        </div>
    )
}

export function Shift({ shift }: { shift: shift }) {
    let startDateTime = parseISO(shift.startDatetime)
    let endDateTime = parseISO(shift.endDatetime)

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const openDrawer = () => {
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
            {shift.imageUrl === "" ?
                <User /> : <img src={shift.imageUrl} alt="" className="flex-none w-10 h-10 rounded-full" />}
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
            <Menu
                as="div"
                className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
            >
                <div>
                    <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                        <span className="sr-only">Open options</span>
                        <GripVertical className="w-6 h-6" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="button"
                                        onClick={() => openDrawer()}
                                        className={classNames(
                                            active ? 'bg-green-100 text-gray-900 w-36' : 'text-green-700',
                                            'block px-4 py-2 text-sm w-36'
                                        )}
                                    >
                                        Bytte
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="button"
                                        className={classNames(
                                            active ? 'bg-green-100 text-gray-900 w-36' : 'text-green-700',
                                            'block px-4 py-2 text-sm w-36'
                                        )}
                                    >
                                        vd
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            <ExchangeDrawer isOpen={isDrawerOpen} onClose={closeDrawer} shiftToExchange={shift} />
        </li>
    )
}

let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
]

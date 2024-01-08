import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { format, parseISO } from 'date-fns';
import { getSpecificName } from "../Queris";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Shiftstype } from "../Shifts";
import { importShiftsToGoogleCalendar } from "../Mutations";
import { ShiftInput } from "@/gql/graphql";

interface ImportDialogProps {
    isOpen: boolean;
    onClose: () => void;
    employeeName: string;
}

export function ImportDialog(props: ImportDialogProps) {
    const { data, loading, error } = useQuery(getSpecificName, {
        variables: { employeeName: props.employeeName },
        skip: !props.employeeName,
    });



    let shiftsTopimport: ShiftInput[] = [];
    let shifts: Shiftstype = [];
    let dataToUse = data?.get;

    if (dataToUse && Array.isArray(dataToUse)) {
        shifts = dataToUse.map((event) => ({
            name: event.creator?.displayName || props.employeeName,
            imageUrl: event.gadget?.iconLink,
            startDatetime: event.start?.dateTimeDateTimeOffset,
            endDatetime: event.end?.dateTimeDateTimeOffset,
        }));
    }
    shiftsTopimport = shifts.map(shift => ({
        name: shift.name,
        dato: format(parseISO(shift.startDatetime), 'dd.MM.yyyy'),
        hours: format(parseISO(shift.startDatetime), 'HH:mm') + '-' + format(parseISO(shift.endDatetime), 'HH:mm'),
        imgUrl: shift.imageUrl,
        day: format(parseISO(shift.startDatetime), 'EEEE'),
    }));
    const [importShifts] = useMutation(importShiftsToGoogleCalendar, {
        variables: { shifts: shiftsTopimport },
    });

    return (
        <Dialog open={props.isOpen} onOpenChange={props.onClose} >
            <DialogContent className="w-3/4 lg:w-full h-80">
                <DialogTitle>
                    <DialogTitle>Importer til Google Kalender</DialogTitle>
                </DialogTitle>
                <Table>
                    <TableBody>
                        {loading && <TableRow><TableCell>Loading...</TableCell></TableRow>}
                        {error && <TableRow><TableCell>Error: {error.message}</TableCell></TableRow>}
                        {!loading && !error && shifts.map((shift, index) => (
                            <TableRow key={index}>
                                <TableCell>{shift.name}</TableCell>
                                <TableCell>{format(parseISO(shift.startDatetime), 'dd.MM.yyyy HH:mm')}</TableCell>
                                <TableCell>{format(parseISO(shift.endDatetime), 'dd.MM.yyyy HH:mm')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <button className="btn btn-primary bg-black text-white rounded-md borde h-12" onClick={() => importShifts()}>
                    Importer til google kaldender
                </button>
            </DialogContent>
        </Dialog>
    )
}
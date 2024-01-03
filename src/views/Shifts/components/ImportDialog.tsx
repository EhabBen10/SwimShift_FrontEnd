import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { format, getWeek, parseISO } from 'date-fns';

function getWeekNumber(startDatetime: string) {
    const date = parseISO(startDatetime);
    return getWeek(date);
}
interface ImportDialogProps {
    isOpen: boolean;
    onClose: () => void;
}
const shifts1 = [
    {
        name: 'Shift 1',
        startDatetime: '2022-01-01T09:00:00Z',
        endDatetime: '2022-01-01T17:00:00Z',
        imageUrl: 'https://example.com/image1.jpg',
    },
    {
        name: 'Shift 2',
        startDatetime: '2022-01-02T09:00:00Z',
        endDatetime: '2022-01-02T17:00:00Z',
        imageUrl: 'https://example.com/image2.jpg',
    },
    {
        name: 'Shift 3',
        startDatetime: '2022-01-03T09:00:00Z',
        endDatetime: '2022-01-03T17:00:00Z',
        imageUrl: 'https://example.com/image3.jpg',
    },
    {
        name: 'Shift 4',
        startDatetime: '2022-01-03T09:00:00Z',
        endDatetime: '2022-01-03T17:00:00Z',
        imageUrl: 'https://example.com/image3.jpg',
    },
    {
        name: 'Shift 4',
        startDatetime: '2022-01-03T09:00:00Z',
        endDatetime: '2022-01-03T17:00:00Z',
        imageUrl: 'https://example.com/image3.jpg',
    },
    {
        name: 'Shift 4',
        startDatetime: '2022-01-03T09:00:00Z',
        endDatetime: '2022-01-03T17:00:00Z',
        imageUrl: 'https://example.com/image3.jpg',
    },
    {
        name: 'Shift 4',
        startDatetime: '2022-01-03T09:00:00Z',
        endDatetime: '2022-01-03T17:00:00Z',
        imageUrl: 'https://example.com/image3.jpg',
    },
    // add more shifts as needed
];

export function ImportDialog(props: ImportDialogProps) {
    return (
        <Dialog open={props.isOpen} onOpenChange={props.onClose} >
            <DialogContent className="w-3/4 lg:w-full h-640">
                <DialogTitle>
                    <DialogTitle>Importer til Google Kalender</DialogTitle>
                </DialogTitle>
                <Table>
                    <TableBody>
                        {shifts1.map((shift, index) => (
                            <TableRow key={index}>
                                <TableCell>{shift.name}</TableCell>
                                <TableCell>{format(parseISO(shift.startDatetime), 'dd.MM.yyyy HH:mm')}</TableCell>
                                <TableCell>{format(parseISO(shift.endDatetime), 'dd.MM.yyyy HH:mm')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <button className="btn btn-primary bg-black text-white rounded-md borde  h-12">
                    Importer til google kaldender</button>
            </DialogContent>
        </Dialog>
    )
}
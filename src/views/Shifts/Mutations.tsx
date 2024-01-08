import { gql } from "apollo-boost";

export const importShiftsToGoogleCalendar = gql`
mutation ImportToGoogleCalender($shifts: [ShiftInput!]!){
 importToGoogleCalender(shifts: $shifts)
}
`;
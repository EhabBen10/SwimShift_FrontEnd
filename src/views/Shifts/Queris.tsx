import { gql } from "apollo-boost";

export const getAllShifts = gql`
query GetAllEvent {
    allShifts{
        creator{
          displayName
        }
          description
          start{
              dateTimeDateTimeOffset
          }
          end{
              dateTimeDateTimeOffset
          }
          
      }
}
`

export const getSpecificName = gql`
query GetEvent($employeeName: String!) {
  get(employeeName: $employeeName){
      description
      start{
          dateTimeDateTimeOffset
      }
      end{
          dateTimeDateTimeOffset
      }
      
  }
}
`

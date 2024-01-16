import { gql } from "apollo-boost";

export const getAllShifts = gql`
query GetAllEvent {
    allShifts{
        creator{
          displayName
        }
        gadget{
            iconLink
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
    gadget{
        iconLink
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

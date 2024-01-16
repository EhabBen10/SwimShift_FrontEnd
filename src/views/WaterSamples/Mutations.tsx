import { gql } from "apollo-boost";

export const uploadWaterSamples = gql`
mutation UploadToDB($input: UploadToDbInput!) {
    uploadToDB(input: $input) {
            uploadedEmploee {name}
      }
    }
`;
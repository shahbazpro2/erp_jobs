import { gql } from '@apollo/client'

export const UserJobDetail = gql`
    query CandidateJobDetailType{
        CandidateJobDetailType{
            jobType,
            availabilityDate,
            minSalary,
            maxSalary,
            industry,
            desireJobTitle
        }
    }
`
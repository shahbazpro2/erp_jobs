import { gql } from '@apollo/client'

export const AllCareers = gql`
    query allCareers{
        allCareers{
            id,
            jobTitle,
            companyName,
            companyLocation,
            confidential,
            currentWorkHere,
            fromDate,
            toDate,
            description
        }
    }
`
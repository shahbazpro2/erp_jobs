import { gql } from '@apollo/client'

export const AllCareers = gql`
    query allCareers{
        allCareers{
            id,
            jobTitle{
            id,name
            },
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
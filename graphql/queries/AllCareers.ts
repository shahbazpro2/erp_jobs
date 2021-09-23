import { gql } from '@apollo/client'

export const getAllCareers = gql`
    query allCareers{
        allCareers{
            id,
            jobTitle,
        }
    }
`
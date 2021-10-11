import { gql } from '@apollo/client'

export const AllEducations = gql`
    query allEducations{
        allEducations{
            id,
            degreeType,
            degreeTitle,
            institution,
            startDate,
            endDate,
        }
    }
`
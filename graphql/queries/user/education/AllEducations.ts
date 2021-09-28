import { gql } from '@apollo/client'

export const AllEducations = gql`
    query allEducations{
        allCareers{
            id,grade,degreeTitle,university,field,passYear
        }
    }
`
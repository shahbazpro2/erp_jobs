import { gql } from '@apollo/client'

export const AllEducations = gql`
    query allEducations{
        allEducations{
            id,grade,degreeTitle,university,field,passYear
        }
    }
`
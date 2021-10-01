import { gql } from '@apollo/client'

export const AllSkills = gql`
    query allSkills{
        allSkills{
            id,
            name,
        }
    }
`
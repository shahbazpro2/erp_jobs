import { gql } from '@apollo/client'

export const AllIndustry = gql`
    query allIndustries{
        allIndustries{
            id,
            name,
        }
    }
`
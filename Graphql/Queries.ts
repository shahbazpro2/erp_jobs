import { gql } from '@apollo/client'

export const getAllCountries = gql`
    query allCountries{
        allCountries{
            id,country
        }
    }
`
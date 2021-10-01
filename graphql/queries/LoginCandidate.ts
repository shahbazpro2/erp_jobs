import { gql } from '@apollo/client'

export const LoginCandidate = gql`
    query loginCandidate{
        loginCandidate{
            jobTitle{id,name},
            gender,
            phone,
        }
    }
`
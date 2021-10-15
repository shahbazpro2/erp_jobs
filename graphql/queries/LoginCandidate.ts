import { gql } from '@apollo/client'

export const LoginCandidate = gql`
    query loginCandidate{
        loginCandidate{
            jobTitle,
            phone,
            city,address,yearOfExperience,dateOfBirth,jobStatus,residenceCountry,profileVisibility,
            user{
            firstName,
            lastName
            }
        }
    }
`
import { gql } from '@apollo/client'

export const LoginCandidate = gql`
    query loginCandidate{
        loginCandidate{
            jobTitle{id,name},
            phone,
            city,address,yearOfExperience,minSalary,currency,dateOfBirth,confidential,jobStatus,residenceCountry,profileVisibility,
            user{
            firstName,
            lastName
            }
        }
    }
`
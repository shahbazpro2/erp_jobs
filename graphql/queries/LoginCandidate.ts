import { gql } from '@apollo/client'

export const LoginCandidate = gql`
    query loginCandidate{
        loginCandidate{
            jobTitle{id,name},
            gender,
            phone,
            city,address,yearOfExperience,minSalary,currency,dateOfBirth,confidential,jobStatus,residenceCountry,profileVisibility,
            user{
            firstName,
            lastName
            }
        }
    }
`
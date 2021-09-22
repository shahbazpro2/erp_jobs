import { gql } from '@apollo/client'

export const LoginCandidate = gql`
    query loginCandidate{
        loginCandidate{
            id,
            jobTitle,
            dateOfBirth,
            gender,
            nationality,
            residenceCountry,
            city,
            phone,
            address,
            jobStatus,
            profileVisibility,
            yearOfExperience,
            minSalary,
            currency,
            confidential
        }
    }
`
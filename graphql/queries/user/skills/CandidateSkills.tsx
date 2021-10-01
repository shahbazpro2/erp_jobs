import { gql } from '@apollo/client'

export const CandidateSkills = gql`
    query candidateSkills{
        candidateSkills{
            id,
            skills
        }
    }
`
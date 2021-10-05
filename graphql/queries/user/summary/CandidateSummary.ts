import { gql } from '@apollo/client'

export const CandidateSummary = gql`
    query{
        currentCandidateSummary{
                id,
                text
        }
}
`
import { gql } from '@apollo/client'

export const AllJobtitles = gql`
    query allJobtitles{
        allJobtitles{
            id,
            name,
        }
    }
`
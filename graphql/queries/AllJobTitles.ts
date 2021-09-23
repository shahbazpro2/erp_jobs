import { gql } from '@apollo/client'

export const GetAllJobtitles = gql`
    query allJobtitles{
        allJobtitles{
            id,
            name,
        }
    }
`
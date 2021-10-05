import { gql } from '@apollo/client'

export const CreateSummary = gql`
    mutation createCandidateProfileSummary(
            $text:String!,
        
    ){
        createCandidateProfileSummary(
    input:{
            text:$text,
           
        
    }){
        ProfileSummary{
        id,
        text
    }}
    }
`

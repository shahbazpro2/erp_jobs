import { gql } from '@apollo/client'

export const DeleteEducation = gql`
    mutation deleteEducation(
            $id:ID!,
    ){
        deleteEducation(id:$id){
            success
        }
    }
`

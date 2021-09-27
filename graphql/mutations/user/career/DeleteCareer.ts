import { gql } from '@apollo/client'

export const DeleteCareer = gql`
    mutation deleteCareer(
            $id:ID!,
    ){
        deleteCareer(id:$id){
            success
        }
    }
`

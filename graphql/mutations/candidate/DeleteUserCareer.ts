import { gql } from '@apollo/client'

export const DeleteUserCareer = gql`
    mutation deleteCareer(
            $id:ID!,
    ){
        deleteCareer(id:$id){
            success
        }
    }
`

import { gql } from '@apollo/client'

export const UpdateEducation = gql`
    mutation updateEducation(
            $id:ID!,
            $degreeTitle:String!,
            $university: String!,
            $field:String!,
            $passYear:String!,
            $grade:String!,
        
    ){
        updateEducation(
        id:$id,
        input:{
            degreeTitle:$degreeTitle,
            university:$university,
            field:$field,
            passYear:$passYear,
            grade:$grade,
        
    }){
        Education{
        id
    }}
    }
`

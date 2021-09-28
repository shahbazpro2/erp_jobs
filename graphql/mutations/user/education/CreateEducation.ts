import { gql } from '@apollo/client'

export const CreateEducation = gql`
    mutation createEducation(
            $degreeTitle:String!,
            $university: String!,
            $field:String!,
            $passYear:String!,
            $grade:String!,
        
    ){
        createEducation(
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

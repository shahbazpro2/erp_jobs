import { gql } from '@apollo/client'

export const UpdateEducation = gql`
    mutation updateEducation(
            $id:ID!,
            $degreeType: EducationEnum!,
            $degreeTitle: String!,
            $institution: String!,
            $startDate: Date!,
            $endDate:Date!,
        
    ){
        updateEducation(
        id:$id,
        input:{
            degreeType: $degreeType,
            degreeTitle: $degreeTitle,
            institution: $institution,
            startDate: $startDate,
            endDate:$endDate,
        
    }){
        Education{
        id
    }}
    }
`

import { gql } from '@apollo/client'

export const CreateEducation = gql`
    mutation createEducation(
        $degreeType: EducationEnum!,
        $degreeTitle: String!,
        $institution: String!,
        $startDate: Date!,
        $endDate:Date!,
        
    ){
        createEducation(
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

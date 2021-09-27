import { gql } from '@apollo/client'

export const UpdateUserCareer = gql`
    mutation updateCareer(
            $id:ID!,
            $jobTitle:ID!,
            $companyName: String!,
            $companyLocation:String!,
            $fromDate:Date!,
            $toDate:Date,
            $currentWorkHere:Boolean,
            $confidential:Boolean
            $description:String!,
        
    ){
    updateCareer(
        id:$id,
        input:{
            
            jobTitle:{  id:$jobTitle},
            companyName:$companyName,
            companyLocation:$companyLocation,
            fromDate:$fromDate,
            toDate:$toDate,
            currentWorkHere:$currentWorkHere,
            description:$description,
            confidential:$confidential,
        
    }){
        Career{
        id
    }}
    }
`

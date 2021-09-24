import { gql } from '@apollo/client'

export const CandidateCareer = gql`
    mutation createCareer(
            $jobTitle:ID!,
            $companyName: String!,
            $companyLocation:String!,
            $fromDate:Date!,
            $toDate:Date!,
            $currentWorkHere:Boolean,
            $confidential:Boolean
            $description:String!,
        
    ){
createCareer(
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

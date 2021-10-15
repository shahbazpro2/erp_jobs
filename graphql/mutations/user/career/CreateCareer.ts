import { gql } from '@apollo/client'

export const CreateCareer = gql`
    mutation createCareer(
            $jobTitle:String!,
            $companyName: String!,
            $companyLocation:String!,
            $fromDate:Date!,
            $toDate:Date,
            $currentWorkHere:Boolean,
            $confidential:Boolean
            $description:String!,
        
    ){
createCareer(
    input:{
            jobTitle:$jobTitle,
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

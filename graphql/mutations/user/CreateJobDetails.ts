import { gql } from '@apollo/client'

export const CreateJobDetails = gql`
    mutation createCandidateJobDetails(
            $jobType:String!,
            $availabilityDate: Date!,
            $minSalary:string,
            $maxSalary:String,
            $industry:String,
            $desireJobTitle:String,
        
    ){
    createCandidateJobDetails(
    input:{
            jobType:$jobType,
            availabilityDate: $availabilityDate,
            minSalary:$minSalary,
            maxSalary:$maxSalary,
            industry:$industry,
            desireJobTitle:$desireJobTitle,
        
    }){
        JobDetail{
        id
    }}
    }
`

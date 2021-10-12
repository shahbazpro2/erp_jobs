import { gql } from '@apollo/client'

export const CreateProfile = gql`
    mutation createCandidate(
            $jobTitle:ID!,
            $phone: String!,
            $dateOfBirth:Date,
            $address:String,
            $city:String,
            $residenceCountry:String,
            $yearOfExperience:String,
            $jobStatus:JobStatusEnum,
            $profileVisibility:ProfileVisibiltyEnum,
            $currency:CurrencyEnum,
            $minSalary:String,
            $confidential:Boolean
        
    ){
    createCandidate(
    input:{
            jobTitle:{  id:$jobTitle},
            phone:$phone,
            dateOfBirth:$dateOfBirth,
            residenceCountry:$residenceCountry,
            address:$address,
            city:$city,
            jobStatus:$jobStatus,
            profileVisibility:$profileVisibility,
            yearOfExperience:$yearOfExperience,
            currency:$currency,
            minSalary:$minSalary
            confidential:$confidential,
        
    }){
        Candidate{
        id
    }}
    }
`

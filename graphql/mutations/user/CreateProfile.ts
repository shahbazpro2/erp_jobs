import { gql } from '@apollo/client'

export const CreateProfile = gql`
    mutation createCandidate(
            $jobTitle:String!,
            $phone: String!,
            $dateOfBirth:Date,
            $address:String,
            $city:String,
            $residenceCountry:String,
            $yearOfExperience:String,
            $jobStatus:JobStatusEnum,
            $profileVisibility:ProfileVisibiltyEnum,
        
    ){
    createCandidate(
    input:{
            jobTitle:$jobTitle,
            phone:$phone,
            dateOfBirth:$dateOfBirth,
            residenceCountry:$residenceCountry,
            address:$address,
            city:$city,
            jobStatus:$jobStatus,
            profileVisibility:$profileVisibility,
            yearOfExperience:$yearOfExperience,
        
    }){
        Candidate{
        id
    }}
    }
`

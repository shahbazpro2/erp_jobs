import { gql } from '@apollo/client'

export const CreateCandidate = gql`
    mutation createCandidate(
        
            $phone: String!,
            $gender:CandidateGender!,
            $dateOfBirth:Date!,
            $address:String!,
            $nationality:CandidateNationality!,
            $residenceCountry:CandidateCountry!,
            $city:String!,
            $jobStatus:CandidateJobStatus!,
            $profileVisibility:CandidateProfileVisibilty!,
            $confidential:Boolean!
        
    ){
    createCandidate(
    input:{
            phone:$phone,
            gender:$gender,
            dateOfBirth:$dateOfBirth,
            address:$address,
            nationality:$nationality,
            residenceCountry:$residenceCountry,
            city:$city,
            jobStatus:$jobStatus,
            profileVisibility:$profileVisibility,
            confidential:$confidential
        
    }){
        Candidate{
        id
        phone
        gender
        dateOfBirth
    }}
    }
`
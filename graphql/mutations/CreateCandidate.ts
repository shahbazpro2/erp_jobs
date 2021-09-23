import { gql } from '@apollo/client'

export const CreateCandidate = gql`
    mutation createCandidate(
            $jobTitle:String!,
            $phone: String!,
            $gender:GenderEnum!,
            $dateOfBirth:Date!,
            $address:String!,
            $nationality:NationalityEnum!,
            $residenceCountry:CandidateCountry!,
            $city:String!,
            $yearOfExperience:String!,
            $jobStatus:JobStatusEnum!,
            $profileVisibility:ProfileVisibiltyEnum!,
            $currency:CurrencyEnum!,
            $minSalary:String!,
            $confidential:Boolean!
        
    ){
    createCandidate(
    input:{
            jobTitle:$jobTitle,
            phone:$phone,
            gender:$gender,
            dateOfBirth:$dateOfBirth,
            address:$address,
            nationality:$nationality,
            residenceCountry:$residenceCountry,
            city:$city,
            yearOfExperience:$yearOfExperience,
            jobStatus:$jobStatus,
            profileVisibility:$profileVisibility,
            currency:$currency,
            minSalary:$minSalary
            confidential:$confidential,
        
    }){
        Candidate{
        id
    }}
    }
`

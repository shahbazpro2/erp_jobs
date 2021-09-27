import { gql } from '@apollo/client'

export const CreateProfile = gql`
    mutation createCandidate(
            $jobTitle:ID!,
            $phone: String!,
            $gender:GenderEnum!,
            $dateOfBirth:Date,
            $address:String,
            $city:String,
            $yearOfExperience:String,
            $currency:CurrencyEnum,
            $minSalary:String,
            $confidential:Boolean
        
    ){
    createCandidate(
    input:{
            jobTitle:{  id:$jobTitle},
            phone:$phone,
            gender:$gender,
            dateOfBirth:$dateOfBirth,
            address:$address,
            city:$city,
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

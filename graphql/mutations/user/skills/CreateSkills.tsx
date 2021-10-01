import { gql } from '@apollo/client'

export const CreateSkills = gql`
    mutation createSkill(
            $id:ID!,
            $name: String!,
    ){
        createSkill(
    input:{
            id:$id,
            name:$name,
        
    }){
        Skill{
        id,name
    }}
    }
`

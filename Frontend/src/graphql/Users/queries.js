// import {gql} from 'apollo-boost'
import {gql} from '@apollo/client'

const GET_Users = gql`
    query Users {
        allUsers {
            _id
            full_name
            cc
            email
            password
            user_type
            status
        }
    }
`;

export {GET_Users};
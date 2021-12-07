import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import {gql} from 'apollo-boost'
// import { gql, useQuery } from "@apollo/client";

const GET_Users = gql`
    {
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

const UserList = () => {

    const { loading, error, data } = useQuery(GET_Users)
    if (loading) return <p> Loading users ... </p>
    if (error) return <p>{error.message}</p>;
    console.log(data)
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <ul>
                    {data.allUsers.map(({_id, full_name, cc, email, password, user_type, status}) => (
                        <li>
                        <h4>{full_name}</h4>
                        <h4>{email}</h4>
                        {/*...User*/}
                        </li>
                    ))}
                </ul>  
            </div>
        </div>
    )
}

export default UserList;

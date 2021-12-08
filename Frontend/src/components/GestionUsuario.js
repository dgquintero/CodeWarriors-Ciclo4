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
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Identificación</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.allUsers.map(({_id, full_name, cc, email, user_type, status}) => (
                            <tr key={_id}>
                                <td>{full_name}</td>
                                <td>{cc}</td>
                                <td>{email}</td>
                                <td>{user_type}</td>
                                <td>{status}</td>
                            </tr>
                        ))}
                    </tbody> 
                </table> 
            </div>
        </div>
    )
}

export default UserList;

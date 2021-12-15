import { gql } from '@apollo/client';

const UPDATE_USER_STATUS = gql`
    mutation UpdateUser($_id: ID!, $campos: UserInputUpdate!) {
        updateUser(_id: $_id, input: $campos) {
        _id
        status
        }
    }
`;

export { UPDATE_USER_STATUS };
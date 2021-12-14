import { gql } from '@apollo/client';


const UPDATE_PROJECT = gql`
    mutation UpdateProject($_id: ID!, $campos: ProjectInputUpdate!) {
        updateProject(_id: $_id, input: $campos) {
        _id
        project_status,
        project_stage
        }
    }
`;

export { UPDATE_PROJECT };
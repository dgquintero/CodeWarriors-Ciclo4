import { gql } from '@apollo/client';

const UPDATE_ENROLLMENT_STATUS = gql`
    mutation UpdateEnrollment($_id: ID!, $campos: EnrollmentUpdate!) {
        updateEnrollment(_id: $_id, input: $campos) {
        _id
        enrollment_status
        }
    }
`;

export { UPDATE_ENROLLMENT_STATUS };
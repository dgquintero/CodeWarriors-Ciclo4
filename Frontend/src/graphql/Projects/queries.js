import { gql } from '@apollo/client'

const GET_Projects = gql`
    query Projects {
        allProjects {
            _id
            project_id
            project_name
            general_objectives
            specific_objectives
            budget
            start_date
            end_date
            leader_name
            leader_cc
            project_status
            project_stage
        }
    }
`;

export { GET_Projects };
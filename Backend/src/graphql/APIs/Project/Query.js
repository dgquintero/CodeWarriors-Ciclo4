import Project from '../../../models/Project'

const Query = {

        allProjects: async () => {
            return await Project.find();
        },
        projectById: (_, { _id }) => Project.findById(_id),
}

export default Query;
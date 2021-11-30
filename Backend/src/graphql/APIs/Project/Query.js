import Project from "../../../models/Project";

const Query = {

        allProjects: async () => {
            return await Project.find();
        }
}

export default Query;

import User from '../../models/User'

const Query = {

        allUsers: async () => {
            return await User.find();
        }
}

export default Query;
import User from '../../../models/User'

const Query = {

        allUsers: async () => {
            return await User.find();
        },

        verifyUser: async (parents, args) => {
            const userFiltered = await User.find({ email: args.email, password: args.password })
               .populate('email')
               .populate('password')
            return userFiltered;
        }
}

export default Query;
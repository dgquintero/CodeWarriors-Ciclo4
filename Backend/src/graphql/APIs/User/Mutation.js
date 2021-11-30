import User from '../../../models/User'

const Mutation = {
    createUser: async (_, { input }) => {
        const newUser = new User(input);
        await newUser.save();
        return newUser;
        },

    async updateUser(_, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, { new: true});
            },

    async deleteUser(_, { _id }){
           return await User.findByIdAndDelete(_id);
        }
    }
export default Mutation;
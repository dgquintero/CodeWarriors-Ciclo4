import User from "./models/User";


export const resolvers = {
      Query: {
        allUsers: async () => {
          return await User.find();
      }
      },
      Mutation: {
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
};

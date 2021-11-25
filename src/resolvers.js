export const resolvers = {
      Query: {
        hello: () => {
          return 'Hello world with Graphql'
        },
        greet(root , { name }){
          return `Hello ${name}`
        }
      }
};

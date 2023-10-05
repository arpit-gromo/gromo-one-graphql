import { customers } from "./mockData/customers.js";
export const resolvers = {
    Query: {
        getAllCustomers: () => customers,
        getCustomerById: async (_, { customer_uuid }) => {
            console.log(`Hello people - customer id = `, customer_uuid);
            return customers.find((customer) => customer.customer_uuid === customer_uuid);
        },
        // getCustomerByGpId: (gpId: string) => customers.find((customer) => customer.gpLinked === gpId),
    }
};
// type Query {
//     getCustomerById(id: ID!): Customer
//     getAllCustomers: [Customer]
//   }
//   type Mutation {
//     createCustomer(input: CustomerInput): Customer
//     updateCustomer(id: ID!, input: CustomerInput): Customer
//     deleteCustomer(id: ID!): Customer
//   }

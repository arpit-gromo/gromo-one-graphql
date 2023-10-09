import { customers } from "./mockData/customers.js";
import { categorySpecificRecommendationData, recommData, topSellingProductData } from "./mockData/recommData.js";
const standardResp = {
    success: true,
    message: "Sample message - Result received successfully",
    error: null
};
export const resolvers = {
    Query: {
        // Customer APIs
        getAllCustomersForGp: async (_, { gpId }) => {
            standardResp["data"] = customers;
            return standardResp;
        },
        getCustomerById: async (_, { customerUuid }) => {
            standardResp["data"] = customers.find((customer) => customer.customerUuid === customerUuid);
            return standardResp;
        },
        // Recommendation APIs
        getGaurenteedSaleCustomerRecommendation: async (_, { gpId }) => {
            standardResp["data"] = recommData.filter(recom => recom.gpid === gpId && recom.isGaurenteedSale);
            return standardResp;
        },
        getHighEarningCustomerRecommendation: async (_, { gpId }) => {
            standardResp["data"] = recommData.filter(recom => recom.gpid === gpId && recom.isHighEarning);
            return standardResp;
        },
        getFirstSaleCustomerRecommendation: async (_, { gpId }) => {
            standardResp["data"] = recommData.filter(recom => recom.gpid === gpId && recom.customer.isFirstSaleDone);
            // console.log(`getFirstSaleCustomerRecommendation = `, standardResp);
            return standardResp;
        },
        getLeadRejectedCustomerRecommendation: async (_, { gpId }) => {
            standardResp["data"] = recommData.filter(recom => recom.gpid === gpId);
            return standardResp;
        },
        getCategoryRecommendation: async (_, { gpId }) => {
            standardResp["data"] = categorySpecificRecommendationData;
            return standardResp;
        },
        getCustomerProductRecommendation: async (_, { gpId, customerUuid }) => {
            standardResp["data"] = recommData.filter(recom => recom.gpid === gpId && recom.customer.customerUuid === customerUuid);
            return standardResp;
        },
        getCategoryCustomerRecommendation: async (_, { gpId, productCategoryName }) => {
            standardResp["data"] = recommData.filter(recom => recom.gpid === gpId && recom.productCategory.name === productCategoryName);
            return standardResp;
        },
        getProductCustomerRecommendation: async (_, { gpId, productId }) => {
            standardResp["data"] = recommData.filter(recom => recom.gpid === gpId && recom.product.id === productId);
            return standardResp;
        },
        getNoOfRecommendedCustomers: async (_, { gpId, productId }) => {
            standardResp["data"] = Math.round(Math.random() * 10);
            return standardResp;
        },
        getTopSellingProducts: async (_, { gpId }) => {
            standardResp["data"] = topSellingProductData;
            return standardResp;
        }
    },
    Mutation: {
        // Customer APIs
        createCustomer: async (_, { input }) => {
            customers.push(input);
            standardResp["data"] = [customers.find(customer => customer.primaryPhoneNumber === input.primaryPhoneNumber)];
            console.log("resp >> ", standardResp);
            return standardResp;
        },
        updateCustomer: async (_, { customerUuid, input }) => {
            standardResp["data"] = [customers.find(customer => customer.customerUuid === customerUuid)];
            return standardResp;
        }
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

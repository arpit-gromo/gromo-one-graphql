import { customers } from "./mockData/customers.js";
import { categorySpecificRecommendationData, recommData } from "./mockData/recommData.js";


export const resolvers = {
    Query: {
        getAllCustomers: () => customers,
        getCustomerById: async (_, { customer_uuid }, )  => {
            return customers.find((customer) => customer.customer_uuid === customer_uuid)
        },
        getGaurenteedSaleCustomerRecommendation: async (_, { gpId }, )  => {
            return recommData.filter(recom => recom.gpid === gpId && recom.isGaurenteedSale);
        },
        getHighEarningCustomerRecommendation: async (_, { gpId }, )  => {
            return recommData.filter(recom => recom.gpid === gpId && recom.isHighEarning);
        },
        getFirstSaleCustomerRecommendation: async (_, { gpId }, )  => {
            return recommData.filter(recom => recom.gpid === gpId && recom.customer.isFirstSaleDone);
        },
        getLeadRejectedCustomerRecommendation: async (_, { gpId }, )  => {
            return recommData.filter(recom => recom.gpid === gpId);
        },
        getCategoryRecommendation: async (_, { gpId }, )  => {
            return categorySpecificRecommendationData;
        },
        getCustomerProductRecommendation: async (_, { gpId, customer_uuid }, )  => {
            return recommData.filter(recom => recom.gpid === gpId && recom.customer.customerUuid===customer_uuid);
        },
        getCategoryCustomerRecommendation: async (_, { gpId, productCategoryName }, )  => {
            return recommData.filter(recom => recom.gpid === gpId && recom.productCategory.name===productCategoryName);
        },
        getProductCustomerRecommendation: async (_, { gpId, productId }, )  => {
            return recommData.filter(recom => recom.gpid === gpId && recom.product.id===productId);
        },
        getNoOfRecommendedCustomers: async (_, { gpId, productId }, )  => Math.round(Math.random()*10),

        // # For You Page - Gaurenteed Sale Customer Recommendation
        // getGaurenteedSaleCustomerRecommendation(gpid: String!) : [RecommendationData!]
        // # For You Page - High Earning Customer Recommendation
        // getHighEarningCustomerRecommendation(gpid: String!) : [RecommendationData!]
        // # For You Page - First Sale Customer Recommendation
        // getFirstSaleCustomerRecommendation(gpid: String!) : [RecommendationData!]
        // # For You Page - Lead Rejected Customer Recommendation
        // getLeadRejectedCustomerRecommendation(gpid: String!) : [RecommendationData!]
        // # For You Page - Category Specific Customer Recommendation
        // getCategoryRecommendation(gpid: String!) : [RecommendationData!]
      
        // #Recommendation for a particular customer linked to a particular gp
        // getCustomerProductRecommendation(gpid: String!, customer_uuid: ID!) : [RecommendationData!]
        
        // #Recommendation for a particular product Cateogry linked to a particular gp
        // getCategoryCustomerRecommendation(gpid: String!, productCategoryName: String!) : [RecommendationData!]
      
        // #Recommendation for a particular product linked to a particular gp
        // getProductCustomerRecommendation(gpid: String!, productId: ID!) : [RecommendationData!]
      
        // #Count of recommended customers for the given product linked to a particular gp
        // getNoOfRecommendedCustomers(gpid: String!, productId: ID!) : [RecommendationData!]

        // getCustomerByGpId: (gpId: string) => customers.find((customer) => customer.gpLinked === gpId),
    }
}



// type Query {
//     getCustomerById(id: ID!): Customer
//     getAllCustomers: [Customer]
//   }

//   type Mutation {
//     createCustomer(input: CustomerInput): Customer
//     updateCustomer(id: ID!, input: CustomerInput): Customer
//     deleteCustomer(id: ID!): Customer
//   }
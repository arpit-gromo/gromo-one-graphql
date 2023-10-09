export const recommendationTypeDefs = `#graphql

enum LeadStatus {
  REJECTED
}


type RecommendationData {
  gpid: String!
  customer: CustomerRecom!
  productCategory: ProductCategory!
  product: Product!
  productSold: Int!
  isHighEarning: Boolean!
  isPreapproved: Boolean!
  isGaurenteedSale: Boolean!
  leadStatus: LeadStatus
  score: Float!
}

type CustomerRecom {
  customerUuid: ID!
  customerFullName: String!
  isFirstSaleDone: Boolean!
  creditScore: Float
}

type Product {
  id: ID
  name: String!
  iconImageURL: String
  amount: Float!
  gcAmount: Float!
}

type ProductCategory {
  id: ID
  name: String!
  amountUpto: Float!
  iconImageURL: String!
}

type CategorySpecificRecommendationData {
  productCategory: ProductCategory!,
  customerCount: Int!
}

type TopSellingProductData {
  productCategory: ProductCategory!,
  product: Product!,
}

type BestRecommData {
  productCategory: ProductCategory!,
  product: [Product!],
}











type RecommendationDataResponse {
  success: Boolean,
  message: String,
  error: String,
  data: [RecommendationData]
}

type CategorySpecificRecommendationDataResponse {
  success: Boolean,
  message: String,
  error: String,
  data: [CategorySpecificRecommendationData]
}

type TopSellingProductResponse {
  success: Boolean,
  message: String,
  error: String,
  data: [TopSellingProductData]
}

type BestRecommendationDataResponse {
  success: Boolean,
  message: String,
  error: String,
  data: [BestRecommData]
}










input RecommendationDataInput {
  gpid: String!
  customer: CustomerRecomInput!
  productCategory: ProductCategoryInput!
  product: ProductInput!
  productSold: Int!
  isHighEarning: Boolean!
  isPreapproved: Boolean!
  isGaurenteedSale: Boolean!
  leadStatus: LeadStatus
  score: Float!
}

input CustomerRecomInput {
  customerUuid: ID!
  customerFullName: String!
  isFirstSaleDone: Boolean!
  creditScore: Float
}

input ProductInput {
  id: ID!
  name: String!
  iconImageURL: String
  amount: Float!
  gcAmount: Float!
}

input ProductCategoryInput {
  id: ID
  name: String!
  amountUpto: Float!
}



type Query {

  # For You Page - Gaurenteed Sale Customer Recommendation
  getGaurenteedSaleCustomerRecommendation(gpId: String!) : RecommendationDataResponse!
  # For You Page - High Earning Customer Recommendation
  getHighEarningCustomerRecommendation(gpId: String!) : RecommendationDataResponse!
  # For You Page - First Sale Customer Recommendation
  getFirstSaleCustomerRecommendation(gpId: String!) : RecommendationDataResponse!
  # For You Page - Lead Rejected Customer Recommendation
  getLeadRejectedCustomerRecommendation(gpId: String!) : RecommendationDataResponse!
  # For You Page - Category Specific Customer Recommendation
  getCategoryRecommendation(gpId: String!) : CategorySpecificRecommendationDataResponse!

  #Recommendation for a particular customer linked to a particular gp
  getCustomerProductRecommendation(gpId: String!, customerUuid: ID!) : RecommendationDataResponse!
  
  #Recommendation for a particular product Cateogry linked to a particular gp
  getCategoryCustomerRecommendation(gpId: String!, productCategoryName: String!) : RecommendationDataResponse!

  #Recommendation for a particular product linked to a particular gp
  getProductCustomerRecommendation(gpId: String!, productId: ID!) : RecommendationDataResponse!

  #Count of recommended customers for the given product linked to a particular gp
  getNoOfRecommendedCustomers(gpId: String!, productId: ID!) : Int!

  #Get Top Selling products for the GP
  getTopSellingProducts(gpId: String!): TopSellingProductResponse!

  # Get 2 of the most recommended products for a customer linked to a gp per category
  getBestProductRecommendation(gpId: String!, customerUuid: ID!) : BestRecommendationDataResponse!

  # Get All Recommendation for a customer linked to a gp per category
  getAllProductRecommendations(gpId: String!, customerUuid: ID!): BestRecommendationDataResponse!

}


`;
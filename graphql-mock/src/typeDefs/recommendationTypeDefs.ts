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
  getGaurenteedSaleCustomerRecommendation(gpId: String!) : [RecommendationData!]
  # For You Page - High Earning Customer Recommendation
  getHighEarningCustomerRecommendation(gpId: String!) : [RecommendationData!]
  # For You Page - First Sale Customer Recommendation
  getFirstSaleCustomerRecommendation(gpId: String!) : [RecommendationData!]
  # For You Page - Lead Rejected Customer Recommendation
  getLeadRejectedCustomerRecommendation(gpId: String!) : [RecommendationData!]
  # For You Page - Category Specific Customer Recommendation
  getCategoryRecommendation(gpId: String!) : [CategorySpecificRecommendationData!]

  #Recommendation for a particular customer linked to a particular gp
  getCustomerProductRecommendation(gpId: String!, customer_uuid: ID!) : [RecommendationData!]
  
  #Recommendation for a particular product Cateogry linked to a particular gp
  getCategoryCustomerRecommendation(gpId: String!, productCategoryName: String!) : [RecommendationData!]

  #Recommendation for a particular product linked to a particular gp
  getProductCustomerRecommendation(gpId: String!, productId: ID!) : [RecommendationData!]

  #Count of recommended customers for the given product linked to a particular gp
  getNoOfRecommendedCustomers(gpId: String!, productId: ID!) : Int!

}



# type Query {
#   getRecommendationByGPID(gpid: $gpid) : 
# }

#   getRecommendationByGPID(gpid: $gpid) : getRecommendationByGPID
  
#   {
#     gpid
#     customer {
#       customerUuid
#       customerFullName
#       isFirstSaleDone
#       creditScore
#     }
#     productCategory {
#       id
#       name
#       amountUpto
#     }
#     product {
#       id
#       name
#       amount
#       gcAmount
#     }
#     productSold
#     isHighEarning
#     isPreapproved
#     isGaurenteedSale
#     leadStatus
#     score
#   }
# }


`;
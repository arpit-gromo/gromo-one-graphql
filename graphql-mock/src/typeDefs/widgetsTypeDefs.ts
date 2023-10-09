export const widgetsTypeDefs = `#graphql

enum WidgetTags {
    CONTACTS
    CREDIT_SCORE
    CHALLAN
    WEBSITE
    PRODUCT
}

type Widget {
    iconImageUrl: String!
    name: String!
    description: String!
    ctaText: String!
    ctaRedirect: String
    ctaTag: WidgetTags!
}

type WidgetResponse {
  success: Boolean,
  message: String,
  error: String,
  data: [Widget]
}


type Query {

  #Get Widgets to Add Customer
  getAddCustomerWidget: WidgetResponse!

}`;
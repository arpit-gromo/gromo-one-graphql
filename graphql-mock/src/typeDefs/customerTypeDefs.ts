// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const customerTypeDefs = `#graphql

# Define the GraphQL types for each Mongoose schema
type Address {
  addressLine1: String
  addressLine2: String
  city: String
  state: String
  pincode: String!
  district: String
  country: String,
}

type BankAccountDetails {
  cancelledChequeImage: String!
  bankAccountNumber: String!
  bankAccountHolderName: String!
  ifscCode: String!
  bankCity: String!
  bankBranch: String!
  isPrimary: Boolean!
}

type FinancialDetails {
  incomeMode: String
  monthlyIncome: Float
  annualIncome: Float
  loanAmount: Float
  loanTenure: Float
  haveGstNumber: Boolean
  haveMutualFunds: Boolean
}

type ProfessionalDetails {
  employersName: String
  employersAddress: Address
  workEmail: String
  employmentSector: String
  employmentType: String
  workExperienceYears: Int
  employmentStatus: String
  occupation: String
}

type KycDetails {
  pan: String
  isPanVerified: Boolean
  panCardImage: String
  aadharCard: String
  aadharFrontImage: String
  aadharBackImage: String
  bankAccountDetails: [BankAccountDetails]
}

type CampaignInfo {
  campaignName: String
  source: String
  medium: String
  campaignId: String
  tags: String
}

type CustomerDetails {
  prefix: String
  firstName: String
  middleName: String
  lastName: String
  dob: String
  maritalStatus: String
  fatherName: String
  motherName: String
  highestEducation: String
  gender: String
  emailId: String
  financialDetails: FinancialDetails
  communicationAddress: Address
  professionalDetails: ProfessionalDetails
  kycDetails: KycDetails
}

type GpLinked {
  gpId: String!
  isVerifiedByGP: Boolean!
  isFavorite: Boolean
  customerCTA: String
  isBonusCustomer: Boolean!
  isFirstSaleDone: Boolean!
  createdAt: String!
  updatedAt: String!
  customerDetails: CustomerDetails
}

type Customer {
  customer_uuid: ID!
  firstName: String
  middleName: String
  lastName: String
  emailId: String
  primaryPhoneNumber: String!
  isEmailVerified: Boolean
  isPhoneNumberVerified: Boolean
  secondaryPhoneNumber: String
  isCommConsented: Boolean
  profileImage: String
  dob: String
  gender: String
  prefix: String
  maritalStatus: String
  fatherName: String
  motherName: String
  highestEducation: String
  isSmoker: Boolean
  permanentAddress: Address
  communicationAddress: Address
  professionalDetails: ProfessionalDetails
  financialDetails: FinancialDetails
  kycDetails: KycDetails
  kycStatus: String
  kycRejectReason: String
  campaignInfo: CampaignInfo
  isGromoExclusive: Boolean!
  agreedTnC: AgreedTnC
  updatedAt: String!
  createdAt: String!
  referredBy: String
  isCustomerGP: Boolean
  metaData: MetaData!
  gpLinked: [GpLinked!]
}

type AgreedTnC {
  tncAgreedId: String!
  tncAgreedOn: String!
}

type MetaData {
  isMigrated: Boolean!
  migrationSource: String!
}

input AddressInput {
  addressLine1: String
  addressLine2: String
  city: String
  state: String
  pincode: String
  district: String
  country: String
}

input BankAccountDetailsInput {
  cancelledChequeImage: String!
  bankAccountNumber: String!
  bankAccountHolderName: String!
  ifscCode: String!
  bankCity: String!
  bankBranch: String!
  isPrimary: Boolean!
}

input FinancialDetailsInput {
  incomeMode: String
  monthlyIncome: Float
  annualIncome: Float
  loanAmount: Float
  loanTenure: Float
  haveGstNumber: Boolean
  haveMutualFunds: Boolean
}

input ProfessionalDetailsInput {
  employersName: String
  employersAddress: AddressInput
  workEmail: String
  employmentSector: String
  employmentType: String
  workExperienceYears: Int
  employmentStatus: String
  occupation: String
}

input KycDetailsInput {
  pan: String
  isPanVerified: Boolean
  panCardImage: String
  aadharCard: String
  aadharFrontImage: String
  aadharBackImage: String
  bankAccountDetails: [BankAccountDetailsInput]
}

input CampaignInfoInput {
  campaignName: String!
  source: String!
  medium: String
  campaignId: String
  tags: String!
}

input CustomerDetailsInput {
  prefix: String
  firstName: String
  middleName: String
  lastName: String
  dob: String
  maritalStatus: String
  fatherName: String
  motherName: String
  highestEducation: String
  gender: String
  emailId: String
  financialDetails: FinancialDetailsInput
  communicationAddress: AddressInput
  professionalDetails: ProfessionalDetailsInput
  kycDetails: KycDetailsInput
}

input GpLinkedInput {
  gpId: String!
  isVerifiedByGP: Boolean!
  isFavorite: Boolean
  isFirstSaleDone: Boolean!
  customerCTA: String
  isBonusCustomer: Boolean!
  createdAt: String!
  updatedAt: String!
  customerDetails: CustomerDetailsInput
}

input CustomerInput {
  customer_uuid: ID!
  firstName: String
  middleName: String
  lastName: String
  emailId: String
  primaryPhoneNumber: String!
  isEmailVerified: Boolean
  isPhoneNumberVerified: Boolean!
  secondaryPhoneNumber: String
  isCommConsented: Boolean
  profileImage: String
  dob: String
  gender: String
  prefix: String
  maritalStatus: String
  fatherName: String
  motherName: String
  highestEducation: String
  isSmoker: Boolean
  permanentAddress: AddressInput
  communicationAddress: AddressInput
  professionalDetails: ProfessionalDetailsInput
  financialDetails: FinancialDetailsInput
  kycDetails: KycDetailsInput
  kycStatus: String
  kycRejectReason: String
  campaignInfo: CampaignInfoInput
  isGromoExclusive: Boolean!
  agreedTnC: AgreedTnCInput
  updatedAt: String!
  createdAt: String!
  referredBy: String
  isCustomerGP: Boolean
  metaData: MetaDataInput
  gpLinked: [GpLinkedInput!]
}

input AgreedTnCInput {
  tncAgreedId: String
  tncAgreedOn: String
}

input MetaDataInput {
  isMigrated: Boolean
  migrationSource: String
}

# Define the root Query and Mutation types
type Query {
  getCustomerById(customer_uuid: ID!): Customer
  getAllCustomers: [Customer]
}

# type Mutation {
#   createCustomer(input: CustomerInput): Customer
#   updateCustomer(id: ID!, input: CustomerInput): Customer
#   deleteCustomer(id: ID!): Customer
# }

`;
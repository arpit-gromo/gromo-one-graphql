export const customers = [
    {
        customerUuid: "12321asdsadf12312",
        firstName: "Arpit",
        lastName: "Rai",
        emailId: null,
        primaryPhoneNumber: "+91-8297050203",
        isGromoExclusive: true,
        updatedAt: new Date(),
        createdAt: new Date(),
        metaData: {
            isMigrated: true,
            migrationSource: "CMS"
        },
        gpLinked: null

    },
    {
        customerUuid: "5784asAVadf12312",
        firstName: "Sahil",
        lastName: "Yadav",
        emailId: "sahil.yadav@gromo.in",
        primaryPhoneNumber: "+91-8123702342",
        isGromoExclusive: false,
        updatedAt: new Date(),
        createdAt: new Date(),
        metaData: {
            isMigrated: false,
            migrationSource: "NEW"
        },
        gpLinked: null

    },
    {
        metaData: {
            isMigrated: false,
            migrationSource: "Mock API"
        },
        updatedAt: "17682391212",
        primaryPhoneNumber: "+91-9876543210",
        isGromoExclusive: false,
        isCustomerGP: false,
        createdAt: "17682391212",
        isPhoneNumberVerified: false,
        gpLinked: [
        {
            gpId: "gp1",
            isBonusCustomer: true,
            isFirstSaleDone: false,
            isVerifiedByGP: false,
            updatedAt: "17682391212",
            createdAt: "17682391212",
            customerDetails: 
            {
                    firstName: "Sanjay",
                    lastName: "Sharma",
                    kycDetails: {
                    pan: "ABCDE123F"
                },
                gender: "male",
                emailId: "sanjay.sharma@gmail.com",
                communicationAddress: {
                    pincode: "122002"
                },
                dob: "12/12/2000",
                financialDetails: {
                    incomeMode: "Cash",
                    monthlyIncome: 50000
                },
                professionalDetails: {
                    occupation: "Business"
                }
            },
        
        }],
    }
];
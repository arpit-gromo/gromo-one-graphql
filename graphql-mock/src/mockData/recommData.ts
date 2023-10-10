export const categorySpecificRecommendationData = [
    {
        productCategory: {
            id: "prodCat1",
            name: "Saving Bank Account",
            amountUpto: 6000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        customerCount: 15
    },
    {
        productCategory: {
            id: "prodCat2",
            name: "Credit Card Account",
            amountUpto: 11000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        customerCount: 11
    },
    {
        productCategory: {
            id: "prodCat3",
            name: "Demat Account",
            amountUpto: 9000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        customerCount: 7
    }
]


// This is for a particular user, when he doesn't select any category in the filter,
// 2 of the best product receommendation will be shown in desc order.
export const bestRecommendationData = [
    {
        productCategory: {
            id: "prodCat1",
            name: "Saving Bank Account",
            amountUpto: 6000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        product: [{
            id: "prod1",
            name: "911 Kotak Bank",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2500,
            gcAmount: 2000
        },
        {
            id: "prod2",
            name: "SBI Account",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2200,
            gcAmount: 1900
        }],
    },
    {
        productCategory: {
            id: "prodCat2",
            name: "Credit Card",
            amountUpto: 6000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        product: [{
            id: "prod1",
            name: "Axis Magnus Card",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2500,
            gcAmount: 2000
        },
        {
            id: "prod2",
            name: "HDFC Infinia",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2200,
            gcAmount: 1900
        }],
    },
    {
        productCategory: {
            id: "prodCat3",
            name: "Demat Account",
            amountUpto: 6000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        product: [{
            id: "prod5",
            name: "Zerodha",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2500,
            gcAmount: 2000
        },
        {
            id: "prod6",
            name: "Motilal Oswal",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2200,
            gcAmount: 1900
        }],
    },
]



// This is for a particular user, when he doesn't select any category in the filter,
// every product receommendation will be shown categry wise.
export const allProductRecommendationData = [
    {
        productCategory: {
            id: "prodCat1",
            name: "Saving Bank Account",
            amountUpto: 6000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        product: [{
            id: "prod1",
            name: "911 Kotak Bank",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2500,
            gcAmount: 2000
        },
        {
            id: "prod2",
            name: "SBI Account",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2200,
            gcAmount: 1900
        },
        {
            id: "prod21",
            name: "ICICI Account",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2200,
            gcAmount: 1900
        },
        {
            id: "prod22",
            name: "IDFC Account",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2200,
            gcAmount: 1900
        }],
    },
    {
        productCategory: {
            id: "prodCat2",
            name: "Credit Card",
            amountUpto: 6000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        product: [{
            id: "prod5",
            name: "Axis Magnus Card",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2500,
            gcAmount: 2000
        },
        {
            id: "prod6",
            name: "HDFC Infinia",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2200,
            gcAmount: 1900
        },
        {
            id: "prod7",
            name: "Amex Primia Card",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2500,
            gcAmount: 2000
        }
    ],
    },
    {
        productCategory: {
            id: "prodCat3",
            name: "Demat Account",
            amountUpto: 6000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        product: [{
            id: "prod5",
            name: "Zerodha",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2500,
            gcAmount: 2000
        },
        {
            id: "prod6",
            name: "Motilal Oswal",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2200,
            gcAmount: 1900
        }],
    },
]



export const recommData = [
    {
        gpid: "gp1",
        customer: {
            customerUuid: "5784asAVadf12312",
            customerFullName: "Arpit Rai",
            isFirstSaleDone: false,
            creditScore: 790
        },
        productCategory: {
            id: "prodCat1",
            name: "Saving Bank Account",
            amountUpto: 10000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        product: {
            id: "prod1",
            name: "911 Kotak Bank",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2500,
            gcAmount: 2000
        },
        productSold: 0,
        isHighEarning: true,
        isPreapproved: true,
        isGaurenteedSale: true,
        leadStatus: null,
        score: 1.2
    },
    {
        gpid: "gp1",
        customer: {
            customerUuid: "6784asAVadf12312",
            customerFullName: "Kartikeya Garg",
            isFirstSaleDone: false,
            creditScore: 790
        },
        productCategory: {
            id: "prodCat1",
            name: "Saving Bank Account",
            amountUpto: 10000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        product: {
            id: "prod2",
            name: "SBI Account",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2200,
            gcAmount: 1900
        },
        productSold: 0,
        isHighEarning: true,
        isPreapproved: true,
        isGaurenteedSale: false,
        leadStatus: null,
        score: 3
    },
    {
        gpid: "gp1",
        customer: {
            customerUuid: "7784asAVadf12312",
            customerFullName: "Amit Joshi",
            isFirstSaleDone: true,
            creditScore: 790
        },
        productCategory: {
            id: "prodCat1",
            name: "Saving Bank Account",
            amountUpto: 10000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        product: {
            id: "prod2",
            name: "SBI Account",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2200,
            gcAmount: 1900
        },
        productSold: 0,
        isHighEarning: false,
        isPreapproved: true,
        isGaurenteedSale: false,
        leadStatus: null,
        score: 3
    }
];





export const topSellingProductData = [
    {
        productCategory: {
            id: "prodCat1",
            name: "Saving Bank Account",
            amountUpto: 10000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        product: {
            id: "prod1",
            name: "SBI Account",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2200,
            gcAmount: 1900
        }
    },
    {
        productCategory: {
            id: "prodCat2",
            name: "Demat Account",
            amountUpto: 11000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        product: {
            id: "prod2",
            name: "Motilal Oswal",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 2200,
            gcAmount: 1500
        }
    },
    {
        productCategory: {
            id: "prodCat3",
            name: "Loans",
            amountUpto: 50000,
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
        },
        product: {
            id: "prod2",
            name: "Kredbee",
            iconImageURL: "https://fastly.picsum.photos/id/418/200/300.jpg?hmac=T7cC_OCVJnIk98mcvhuKBWancCeGl2KcyuSBTCYE-QM",
            amount: 22000,
            gcAmount: 1800
        }
    }
]
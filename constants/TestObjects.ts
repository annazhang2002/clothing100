import { User, Clothing, Image, Bubble, Exchange } from '../types'
import * as ENUMS from '../typeEnums'

export const testUser: User = {
    classYear: 2024,
    email: 'anna.zhang@yale.edu',
    firstName: 'Anna',
    garmentsBorrowed: [],
    garmentsBought: [],
    garmentsLent: [],
    garmentsSold: [],
    lastName: 'Zhang',
    listBubbles: [],
    listFriends: [],
    numGarmentsBorrowed: 0,
    numGarmentsBought: 0,
    numGarmentsLent: 0,
    numGarmentsSold: 0,
    residentialCollege: 'Ezra Stiles',
    userId: 'a1',
    username: 'anna'
}

export const testImg: Image = {
    url: "https://images.fcwholesale.com/TP/6/TP6503-RED-03.jpg",
    altText: "cool shirt"
}

export const testClothing: Clothing = {
    available: true,
    title: "A Very Cool Shirt",
    id: "abc",
    image: testImg,
    sellerId: 1,
    category: "hi",
    offerType: ENUMS.ClothingOfferType.Borrow,
    color: [ENUMS.ClothingColor.Black],
    size: ENUMS.ClothingSize.L,
    description: "this is a very cool shirt",
    condition: ENUMS.ClothingCondition.BrandNew,
    brand: "h",
}

export const testBubble: Bubble = {
    adminId: 123,
    id: '456',
    privacy: ENUMS.BubblePrivacy.Open,
    color: 'cyan',
    name: "Cool Bubble",
    userIds: ["a1", "2b", "3c"]
}

export const testExchange: Exchange = {
    buyer: 46810,
    id: 'a3b2c2str',
    date: new Date(),
    price: 10.99,
    seller: 23450
}
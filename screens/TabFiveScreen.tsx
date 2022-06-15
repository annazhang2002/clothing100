import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ExchangeItem from '../components/ExchangeItem';
import { RootTabScreenProps, Clothing, Image, User, Exchange} from '../types';
import * as ENUMS from '../typeEnums'
import { transformFromAstSync } from '@babel/core';

export default function TabFiveScreen() {
  const shirtImg: Image = {
    url: "https://images.fcwholesale.com/TP/6/TP6503-RED-03.jpg",
    altText: "cool shirt"
  }
  const shirt: Clothing = {
    title: "A Very Cool Shirt",
    id: 1,
    image: shirtImg,
    sellerId: 1,
    category: "hi",
    offerType: ENUMS.ClothingOfferType.Borrow,
    color: [ENUMS.ClothingColor.Black],
    size: ENUMS.ClothingSize.L,
    description: "this is a very cool shirt",
    condition: ENUMS.ClothingCondition.BrandNew,
    brand: "h",
  }

  const d: Date = new Date();

  const testExchange: Exchange = {
    buyer: 5,
    clothingID: 1,
    date: d,
    price: 3,
    seller: 1,
  }

  const testUser: User = {
    classYear: 2023,
    email: "tamar.geller@yale.edu",
    firstName: "Tamar",
    garmentsBorrowed: [],
    garmentsBought: [],
    garmentsLent: [],
    garmentsSold: [],
    lastName: "Geller",
    listBubbles: [],
    listFriends: [],
    numGarmentsBorrowed: 0,
    numGarmentsBought: 0,
    numGarmentsLent: 0,
    numGarmentsSold: 0,
    residentialCollege: "Davenport",
    userId: 1,
    username: "trg29",
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Five</Text>
      <ExchangeItem item={shirt} person={testUser} exchange={testExchange} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabFiveScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

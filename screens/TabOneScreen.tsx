import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps, Clothing, Image } from '../types';
import * as ENUMS from '../typeEnums'
import { firebase } from '../config';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const clothesRef = firebase.firestore().collection('clothes')

  const shirtImg: Image = {
    url: "https://images.fcwholesale.com/TP/6/TP6503-RED-03.jpg",
    altText: "cool shirt"
  }
  const item: Clothing = {
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
  const addClothing = (item: Clothing) => {
    clothesRef.add(item)
      .then(doc => {
        console.log("added item!")
      })
      .catch((error) => {
        console.log(error)
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Button title="Add Clothing" onPress={() => addClothing(item)} />
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

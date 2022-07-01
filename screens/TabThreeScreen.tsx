import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import BubbleComp from '../components/BubbleComp';
import { RootTabScreenProps} from '../types';
import { Bubble } from '../types';
import * as ENUMS from '../typeEnums';

export default function TabThreeScreen() {
  const myBub: Bubble = {
    adminId: 123,
    bubbleId: 456,
    bubblePrivacy: ENUMS.BubblePrivacy.Open,
    color: 'cyan',
    name: "Cool Bubble",
    userIds: [1, 2, 3]
}
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Three</Text>
      <BubbleComp item={myBub}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabThreeScreen.tsx" />
    </View>
  )
};

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

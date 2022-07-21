import { StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps, Clothing } from '../types';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addClothing } from '../redux/actions/clothes';
import { testClothing } from '../constants/TestObjects';
import ShopItem from '../components/ShopItem';

function ClothingFeedTabScreen(props: any) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clothing Test</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ShopItem item={testClothing} />
      <Button title="create clothing item" onPress={() => props.addClothingItem(testClothing)} />
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

const mapStateToProps = (state: any) => ({
  clothesById: state.clothes.clothesById,
  clothesIds: state.clothes.clothesIds,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    // dispatching plain actions
    addClothingItem: (newItem: Clothing) => {
      dispatch(addClothing(newItem))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClothingFeedTabScreen)
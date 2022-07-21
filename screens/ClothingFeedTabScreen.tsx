import { StyleSheet, Button, ScrollView, FlatList } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps, Clothing } from '../types';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addClothing, fetchClothes } from '../redux/actions/clothes';
import { testClothing } from '../constants/TestObjects';
import ShopItem from '../components/ShopItem';
import { useEffect } from 'react';

function ClothingFeedTabScreen(props: any) {

  // TODO: this is running when the props update i think? we should try putting it into a higher class
  useEffect(() => {
    const limit = 2
    props.fetchClothes(limit)
    console.log(props.clothesById)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clothing Test</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <FlatList
          data={props.clothesIds}
          renderItem={({ item }) => (<ShopItem item={props.clothesById[item]} />)}
          keyExtractor={item => `${item}`}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
        />
      </ScrollView>
      {/* TODO: fix bug with adding new clothing */}
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
    },
    fetchClothes: (count: number) => {
      dispatch(fetchClothes(count))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClothingFeedTabScreen)
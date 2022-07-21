import { StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Dispatch } from 'redux';
import { testExchange } from '../constants/TestObjects';
import { connect } from 'react-redux';
import { createExchange } from '../redux/actions/exchange';
import { Exchange } from '../types';
import * as ENUMS from '../typeEnums';
import { useEffect } from 'react';

function ExchangeTabScreen(props: any) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exchange Test</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="create exchange" onPress={() => props.createExchange(testExchange)} />
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
  exchangeById: state.exchange.exchangeById,
  exchangeIds: state.exchange.exchangeIds,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
      // dispatching plain actions
      createBubble: (newExchange: Exchange) => {
          dispatch(createExchange(newExchange))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeTabScreen)
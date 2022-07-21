import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { connect } from 'react-redux';
import { updateName, fetchUser } from '../redux/actions/user';
import { Dispatch } from 'redux';
import { useEffect } from 'react';

function TabTwoScreen(props: any) {
  const user = props.user

  // useEffect(() => {
  //   props.fetchUser(1)
  // })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
      <Button title="update name" onPress={() => props.updateName("Anna", 1)} />
      <Text>My name is {user.name}</Text>
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
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    // dispatching plain actions
    updateName: (name: String, id: Number) => {
      dispatch(updateName(name, id))
    },
    fetchUser: (id: Number) => {
      dispatch(fetchUser(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabTwoScreen)
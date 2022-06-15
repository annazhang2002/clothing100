import { Clothing, User , ImageType} from "../types";
import { View, Text } from "./Themed";
import React from 'react';

import {Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});



export default function ExchangeItem(props: {item: Clothing; person: User; picture: ImageType}) {
    return (
      <View style={styles.container}>
        <Text> {props.person.firstName} would like to  </Text>
        <Text> {props.item.title} </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: props.item.image.url.toString(),
          }}
        />
      </View>
)
};
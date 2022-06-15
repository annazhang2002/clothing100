import { Clothing, User , Exchange} from "../types";
import { View, Text } from "./Themed";
import React from 'react';
import * as ENUMS from '../typeEnums'

import {Image, StyleSheet } from 'react-native';
import { useLinkProps } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  circle: {
    height: 185,
    width: 375,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    //alignItems: 'flex-end'
  },
  rectangle: {
    borderRadius: 25,
    background: '#73AD21',
    padding: 20,
    width: 200,
    height: 150,

  },
  text: {
      textAlign: 'right',
      color: 'black',
  },
  date_text: {
    textAlign: 'center',
    color: 'grey'
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



export default function ExchangeItem(props: {item: Clothing; person: User; exchange: Exchange;}) {
    return (
      <View style={[styles.circle, {backgroundColor: 'lightgray' }]}>
        <Text style={styles.title}> {props.person.firstName} would like to {getExchangeTypeFromOfferType(props.item)} </Text>
        <Text style={styles.title}> {props.item.title} </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: props.item.image.url.toString(),
          }}
        />
        <Text style={styles.date_text}> Date Needed: {props.exchange.date.toString()} </Text>
        <Text style={styles.text}> approve decline   </Text>
      </View>
)
};

// Returns the correct ClothingOfferType to appear in a user's feed
// This ClothingOfferType is the opposite of the Clothing.offerType
function getExchangeTypeFromOfferType(item: Clothing): string {
  if (item.offerType == ENUMS.ClothingOfferType.Borrow)
  {
    return "lend";
  }
  else if (item.offerType == ENUMS.ClothingOfferType.Rent)
  {
    return "rent";
  }
  else if (item.offerType == ENUMS.ClothingOfferType.Sell)
  {
    return "buy";
  }
  else if (item.offerType == ENUMS.ClothingOfferType.Lend)
  {
    return "borrow";
  }
  else
  {
    // TODO(tgeller) Add correct error handling.
    return "ERROR";
  }
} 

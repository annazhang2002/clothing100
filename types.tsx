/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as ENUMS from './typeEnums'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type User = {
  classYear: Number;
  email: String;
  firstName: String;
  garmentsBorrowed: Array<Clothing>;
  garmentsBought: Array<Clothing>;
  garmentsLent: Array<Clothing>;
  garmentsSold: Array<Clothing>;
  lastName: String;
  listBubbles: Array<Bubble>;
  listFriends: Array<User>; //TODO: Not sure if this will break things
  numGarmentsBorrowed: Number;
  numGarmentsBought: Number;
  numGarmentsLent: Number;
  numGarmentsSold: Number;
  residentialCollege: String;
  userID: Number;
  username: String;
};

export type Clothing = {
  id: Number;
  sellerId: Number;
  category: String;
  offerType: ENUMS.ClothingOfferType;
  color: Array<ENUMS.ClothingColor>;
  size: ENUMS.ClothingSize | ENUMS.ClothingPantsSize;
  description: String;
  condition: ENUMS.ClothingCondition;
  brand: String;
  title: String;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  TabFour: undefined;
  TabFive: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

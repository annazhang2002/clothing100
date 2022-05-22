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
  firstName: String;
  lastName: String;
  residentialCollege: String;
  classYear: Number;
  username: String;
  garmentsLent: Number;
  garmentsBorrowed: Number;
  garmentsSold: Number;
  garmentsBought: Number;
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

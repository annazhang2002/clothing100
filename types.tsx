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

export type Image = {
  url: String;
  altText: String;
}

export type Clothing = {
  brand: String;
  category: String;
  color: Array<ENUMS.ClothingColor>;
  condition: ENUMS.ClothingCondition;
  description: String;
  id: Number;
  image: Image;
  offerType: ENUMS.ClothingOfferType;
  sellerId: Number;
  size: ENUMS.ClothingSize | ENUMS.ClothingPantsSize;
  title: String;
};

export type Bubble = {
  name: String;
  bubbleType: ENUMS.BubbleType;
  userIds: Array<Number>;
  adminId: Number;
  bubbleId: Number;
}

export type Date = {
  day: Number;
  month: Number;
  year: number;
};

export type Exchange = {
  seller: String;
  buyer: String;
  date: Date;
  clothingID: Number;
  price: Number;
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

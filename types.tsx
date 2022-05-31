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

export type User = {
  classYear: Number;
  email: String;
  firstName: String;
  garmentsBorrowed: Array<Clothing>;
  garmentsBought: Array<Clothing>;
  garmentsLent: Array<Clothing>;
  garmentsSold: Array<Clothing>;
  lastName: String;
  listBubbles: Array<BubbleId>;
  listFriends: Array<UserId>;
  numGarmentsBorrowed: Number;
  numGarmentsBought: Number;
  numGarmentsLent: Number;
  numGarmentsSold: Number;
  residentialCollege: String;
  userId: Number;
  username: String;
};

export type Bubble = {
  adminId: Number;
  bubbleId: Number;
  bubblePrivacy: ENUMS.BubblePrivacy;
  name: String;
  userIds: Array<Number>;
}


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

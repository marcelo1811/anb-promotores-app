import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createAppContainer
} from 'react-navigation';
import {
  HomeScreen
} from '../screens'

const AppNavigator = createAppContainer(createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
}));

export default AppNavigator;

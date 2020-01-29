import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createAppContainer
} from 'react-navigation';
import {
  LoginScreen,
  HomeScreen,
  SelectStoreScreen
} from '../screens'

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Home',
        })
      },
      Login: {
        screen: LoginScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Login',
        })
      },
      SelectStore: {
        screen: SelectStoreScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Selecione uma loja',
        })
      },
    },
    {
      initialRouteName: 'Login'
    }
  )
);

export default AppNavigator;

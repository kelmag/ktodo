import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../../screens/Home';

import Todo from '../../screens/Todo';
import NBComponents from '../../screens/NBComponents';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Todo: {
      screen: Todo,
    },
    NBComponents: {
      screen: NBComponents,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);

export default createAppContainer(AppNavigator);

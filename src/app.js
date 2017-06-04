import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import DrawerButton from './components/DrawerButton';

import styles from './containers/Main/style';

// Containers
import Main from './containers/Main';
import Vehicles from './containers/Vehicles';

const HomeNavigator = StackNavigator({
  MainScreen: {
    screen: Main
  }
}, {
  navigationOptions: ({navigation}) => ({
    title: 'Gas Tracker',
    headerTitleStyle: styles.title,
    headerStyle: styles.header,
    headerLeft: <DrawerButton navigation={navigation} />,
  }),
});

const MainNavigator = DrawerNavigator({
  Home: {
    screen: HomeNavigator
  }
});

export default MainNavigator;

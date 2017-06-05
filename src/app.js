import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import DrawerButton from './components/DrawerButton';

import styles from './containers/Main/style';

// Containers
import Main from './containers/Main';
import Vehicles from './containers/Vehicles';

const AppDrawer = DrawerNavigator({
  MainScreen: {
    screen: Main
  },
  VehicleScreen: {
    screen: Vehicles
  },
});

const App = StackNavigator({
  Home: {
    screen: AppDrawer,
    navigationOptions: ({navigation}) => ({
      title: 'Gas Tracker',
      headerTitleStyle: styles.title,
      headerStyle: styles.header,
      headerLeft: <DrawerButton navigation={navigation} />,
    }),
  }
});

// const HomeNavigator = StackNavigator({
//   VehicleScreen: {
//     screen: Vehicles
//   },
//   MainScreen: {
//     screen: Main
//   },
// }, {
//   navigationOptions: ({navigation}) => ({
//     title: 'Gas Tracker',
//     headerTitleStyle: styles.title,
//     headerStyle: styles.header,
//     headerLeft: <DrawerButton navigation={navigation} />,
//   }),
// });


export default App;

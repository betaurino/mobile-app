import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import DrawerButton from './components/DrawerButton';

import styles from './containers/Main/style';

// Containers
import Login from './containers/Login';
import Register from './containers/Register';
import Logoff from './containers/Logoff';

// Logged
import Main from './containers/Main';
import Vehicles from './containers/Vehicles';
import FillEntries from './containers/FillEntries';
import Station from './containers/Station';

const AppDrawer = DrawerNavigator({
  MainScreen: {
    screen: Main
  },
  VehicleScreen: {
    screen: Vehicles
  },
  FillEntryScreen: {
    screen: FillEntries
  },
  LogoffScreen: {
    screen: Logoff
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
  },
  LoginScreen: {
    screen: Login
  },
  StationScreen: {
    screen: Station
  },
  RegisterScreen: {
    screen: Register
  },
});

export default App;

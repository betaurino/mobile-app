import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import DrawerButton from './components/DrawerButton';

import styles from './containers/Main/style';

// Containers
import Login from './containers/Login';
import Register from './containers/Register';
import Main from './containers/Main';
import Vehicles from './containers/Vehicles';
import FillEntries from './containers/FillEntries';

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
});

const App = StackNavigator({
  LoginScreen: {
    screen: Login
  },
  RegisterScreen: {
    screen: Register
  },
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

export default App;

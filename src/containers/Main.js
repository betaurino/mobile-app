import React, { Component, PropTypes } from 'react';

// styles
import styles from '../assets/styles/header';

// Components
import { View, Text, Button } from 'react-native';
import MenuIcon from '../components/MenuIcon';

class Main extends Component {
  static navigationOptions = {
    title: 'Gas Tracker',
    headerTitleStyle: styles.title,
    headerStyle: styles.header,
    headerLeft: (<MenuIcon />)
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <MenuIcon />
      </View>
    )
  }
}

export default Main;

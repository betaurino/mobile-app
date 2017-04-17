import React, { Component, PropTypes } from 'react';

// Components
import { View, Text, Button } from 'react-native';
import Toolbar from '../../components/Toolbar';

class Main extends Component {
  static navigationOptions = Toolbar;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
      </View>
    )
  }
}

export default Main;

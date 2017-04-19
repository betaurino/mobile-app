import React, { Component, PropTypes } from 'react';

// Components
import { View, Text, Button } from 'react-native';
import Toolbar from '../../components/Toolbar';
import MapView from '../../components/MapView';

// styles
import styles from './style';

class Main extends Component {
  static navigationOptions = Toolbar;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView />
      </View>
    )
  }
}

export default Main;

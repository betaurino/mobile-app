import React, { Component, PropTypes } from 'react';
import Auth from '../Auth';

// Components
import { View, Text, Button } from 'react-native';
import MapView from '../../components/MapView';
import Icon from 'react-native-vector-icons/MaterialIcons';

// styles
import styles from './style';

class Main extends Auth {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView navigation={this.props.navigation} />
      </View>
    );
  }
}

Main.navigationOptions = {
  drawerLabel: 'Mapa',
  drawerIcon: () => (
    <Icon name="map" size={24} />
  ),
}

Main.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Main;

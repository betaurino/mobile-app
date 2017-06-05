import React, { Component, PropTypes } from 'react';

// Components
import { View, Text, Button } from 'react-native';
import MapView from '../../components/MapView';
import Icon from 'react-native-vector-icons/MaterialIcons';

// styles
import styles from './style';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MapView />
    </View>
  );
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

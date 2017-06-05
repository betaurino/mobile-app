import React, { Component, PropTypes } from 'react';

// Components
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// style
import styles from './style';

const Vehicles = ({ navigation }) => {
  return (
    <View>
      <Text> AQUI EH VEICULOS </Text>
    </View>
  );
}

Vehicles.navigationOptions = {
  drawerLabel: 'Veículos',
  drawerIcon: () => (
    <Icon name="directions-car" size={24} />
  ),
}

Vehicles.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Vehicles;

import React, { Component, PropTypes } from 'react';

// Components
import {
  View,
  Text,
  Button
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const FillEntries = ({ navigation }) => {
  return (
    <View>
      <Text>you'd never break the chain</Text>
    </View>
  )
}

FillEntries.navigationOptions = {
  drawerLabel: 'Abastecimentos',
  drawerIcon: () => (
    <Icon name="local-gas-station" size={24} />
  ),
}

FillEntries.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default FillEntries;

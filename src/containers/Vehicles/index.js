import React, { Component, PropTypes } from 'react';

// Components
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// style
import styles from './style';

class Vehicles extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Vehicles',
    }),
    header: (navigation, defaultHeader) => ({
      ...defaultHeader,
      title: 'Veículos',
    })
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <h1> AQUI EH VEICULOS </h1>
      </View>
    );
  }
}

Vehicles.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Vehicles;

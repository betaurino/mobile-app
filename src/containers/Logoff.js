import React, { Component, PropTypes } from 'react';

import { AsyncStorage, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Logoff extends Component {
  constructor(props) {
    super(props);
  }

  logoffUser = () => {
    return this.props.navigation.navigate('LoginScreen');
    // AsyncStorage.removeItem('@Auth:key')
    //   .then(res => {
    //   })
  }

  componentWillMount() {
    this.logoffUser();
  }

  render() {
    return (
      <View />
    )
  }
}

Logoff.navigationOptions = {
  drawerLabel: 'Sair',
  drawerIcon: () => (
    <Icon name="person-outline" size={24} />
  ),
}

Logoff.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Logoff;

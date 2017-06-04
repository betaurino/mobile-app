import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import style from './style';

const DrawerButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
      <Icon name="menu" size={24} style={style.icon} />
    </TouchableOpacity>
  );
};

DrawerButton.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

export default DrawerButton;

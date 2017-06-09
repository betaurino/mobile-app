import React, { Component, PropTypes } from 'react';
import moment from 'moment';

// Components
import {
  View,
  Text,
  Button,
  ListView,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './style';

class FuelEntryItem extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    return (
      <View style={styles.item}>
        <View>
          <Icon name='attach-money' size={36} style={styles.icon} />
        </View>
        <View style={styles.text}>
          <Text>{data.date}</Text>
          <Text style={{ fontSize: 14 }}>Valor: R$ {data.total}</Text>
          <Text>Veículo: {data.vehicle}</Text>
          <Text>Quantidade: {data.amount} {data.unit}</Text>
        </View>
      </View>
    );
  }
}

export default FuelEntryItem;

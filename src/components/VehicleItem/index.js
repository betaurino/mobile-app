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

class VehicleItem extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  toggleModal() {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  onDeleteClick() {
    console.log('deletou');
  }

  render() {
    const {data} = this.props;
    return (
      <View style={styles.item}>
        <View>
          <Icon name='directions-car' size={36} style={styles.icon} />
        </View>
        <View style={styles.text}>
          <Text>{moment(data.createdAt).format('DD-MM-YYYY')}</Text>
          <Text>Modelo: {data.model}</Text>
          <Text>Marca: {data.mark}</Text>
          <Text>Placa: {data.plate}</Text>
        </View>
        <View>
          <Icon.Button name='delete-forever' size={24} style={styles.deleteIcon} />
        </View>
      </View>
    );
  }
}

export default VehicleItem;

import React, { Component, PropTypes } from 'react';

// Components
import {
  View,
  Text,
  Button,
  ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import VehicleItem from '../../components/VehicleItem';

import { getVehicles } from '../../services/Vehicles';

// style
import styles from './style';

class Vehicles extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(getVehicles()),
    };

    this.renderVehicles = this.renderVehicles.bind(this);
  }

  renderVehicles() {
    return (
      <ListView contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={
          rowData => {
            return <VehicleItem data={rowData} />
          }
        }
      />
    );
  }

  render() {
    return (
      <View>
        {this.renderVehicles()}
      </View>
    );
  }
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

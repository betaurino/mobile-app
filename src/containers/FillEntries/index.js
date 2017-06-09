import React, { Component, PropTypes } from 'react';

// Components
import {
  View,
  Text,
  Button,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FuelEntryItem from '../../components/FuelEntryItem';

import {getFuelEntries} from '../../services/FuelEntries';


class FillEntries extends Component {
  constructor(props) {
    super(props);
  }

  renderFuelEnries = () => {
    return getFuelEntries().map((fe, i) => {
      return (
        <View key={i}>
          <FuelEntryItem data={fe} />
        </View>
      )
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={{ paddingLeft: 20, paddingTop: 30}}>
          {this.renderFuelEnries()}
        </View>
      </ScrollView>
    )
  }
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

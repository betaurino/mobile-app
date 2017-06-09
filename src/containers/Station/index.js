import React, { Component, PropTypes } from 'react';

import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as styles from './styles';

class Station extends Component {
  constructor(props) {
    super(props);
  }

  renderPrices = () => {
    const { prices } = this.props.navigation.state.params;

    return prices.map((p, i) => (
      <View style={styles.native.item} key={i}>
        <View>
          <Icon name='local-gas-station' size={36} style={styles.native.icon} />
        </View>
        <View style={styles.native.text}>
          <Text style={{ fontSize: 14 }}>{p.fuel} ({p.unit})</Text>
          <Text>R$ {p.value}</Text>
        </View>
        <View>
          <Text style={styles.native.date}>Coletado em: {p.collectedAt}</Text>
        </View>
      </View>
    ));
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView>
        <View>
          <View style={styles.native.imgContent}>
            <Image
              source={require('../../assets/img/gas-icon.png')}
              style={styles.native.image}
            />
          </View>
          <View style={styles.native.ttlContent}>
            <Text style={styles.native.title}>{params.name}</Text>
          </View>
        </View>
        <View style={styles.native.listContainer}>
          {this.renderPrices()}
        </View>
      </ScrollView>
    )
  }
}

Station.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Station;

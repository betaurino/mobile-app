import React, { PropTypes, Component } from 'react';
import MapView from 'react-native-maps';

// StyleSheet
import styles from './style';

import { LATITUDE_DELTA, LONGITUDE_DELTA } from '../../constants/map';
import { getGasStations } from '../../services/GasStations';

const MarkerIcon = require('../../assets/img/gas-icon.png');

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markers: []
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          currentPosition: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        });
      }
    );

    this.setState({
      markers: getGasStations()
    })
  }

  render() {
    return (
      <MapView
        initialRegion={this.state.currentPosition}
        provider='google'
        style={styles.map}
      >
        {
          this.state.markers.map(marker =>
            <MapView.Marker
              key={marker.id}
              coordinate={marker.latlng}
              title={marker.name}
              description={marker.address}
              image={MarkerIcon}
            />
          )
        }
      </MapView>
    );
  }
}

export default Map;

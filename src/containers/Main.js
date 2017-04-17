import React, { Component, PropTypes } from 'react';

import { View, Text, Button } from 'react-native';

class Main extends Component {
  static navigationOptions = {
    title: 'Main'
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text> Map</Text>
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

export default Main;

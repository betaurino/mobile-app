import React, { Component } from 'react';

import { AsyncStorage } from 'react-native';

class Auth extends Component {
  constructor(props) {
    super(props);

    const { goBack } = this.props.navigation;

    this.getUserLogged(goBack);
  }

  getUserLogged = (goBack) => {
    AsyncStorage.getItem('@Auth:key')
      .then(res => {
        if(!res) {
          goBack('LoginScreen');
        }
      })
  }
}

export default Auth;

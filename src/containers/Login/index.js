import React, { Component } from 'react';

import {
  View,
  Image,
  Text,
  ScrollView,
  AsyncStorage
} from 'react-native';

import Modal from 'react-native-modal';
import { Item, Input, Form, Button } from 'native-base';
import { login } from '../../services/Users';

import * as styles from './styles'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  showError = (error) => {
    this.setState({
      error
    });
  }

  onLogin = () => {
    if(this.state.email === "" || this.state.password === "") {
      this.showError('Digite seu email e senha.');
    }

    login(this.state).then(res => {
      if(res.status === 404) {
        this.showError('usuario não encontrado');
        return;
      }

      AsyncStorage.setItem('@Auth:key', JSON.stringify(res))
        .then(data => this.props.navigation.navigate('Home'))
    })
    .catch(err => console.log(res))
  }

  render() {
    return (
      <ScrollView>
      <View>
        <View style={styles.natStyle.logo}>
          <Image
            source={require('../../assets/img/gas-icon.png')}
            style={styles.natStyle.image}
          />
        </View>
        <View style={styles.natStyle.form}>
          <Form>
            <Item underline>
                <Input
                  style={styles.baseStyle.inputs}
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                  name="email"
                  placeholder="Email"
                />
            </Item>
            <Item underline>
                <Input
                  style={styles.baseStyle.inputs}
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  secureTextEntry
                  placeholder="Senha"
                />
            </Item>
          </Form>
        </View>
        <View style={styles.natStyle.error}>
          <Text style={{'color': '#e61610'}}>{this.state.error}</Text>
        </View>
        <View style={{ paddingTop: 40}}>
          <View style={styles.baseStyle.buttonContainer}>
            <Button
              style={styles.baseStyle.button}
              onPress={() => this.onLogin()}
            >
              <Text style={{ color: '#fff' }}>ENTRAR</Text>
            </Button>
          </View>
          <View style={styles.baseStyle.buttonContainer}>
            <Button
              style={{...styles.baseStyle.button, backgroundColor: '#ffb81a'}}
              onPress={() => this.props.navigation.navigate('RegisterScreen')}
            >
              <Text style={{ color: '#fff' }}>CADASTRAR</Text>
            </Button>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

Login.navigationOptions = props => {

}

export default Login;

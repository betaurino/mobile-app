import React, { Component } from 'react';

import {
  View,
  Image,
  Text,
  ScrollView
} from 'react-native';

import { Item, Input, Form, Button, Label } from 'native-base';
import { create } from '../../services/Users';

import * as styles from './styles'

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }

  }

  showError = (error) => {
    this.setState({
      error
    })
  }

  onSubmitCreate = () => {
    const { name, email, password } = this.state;

    // if (name === '' || email === '' || password === '') {
    //   this.showError('Preencha todos os campos.');
    //   return;
    // }

    create(this.state).then(res => {
      if(res.status !== 200) {
        this.showError('Algo errado aconteceu.');
      }

      return this.props.navigation.navigate('LoginScreen');
    })
    .catch(err => console.log(err))
  }

  render() {
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
          <Text style={styles.native.title}>Cadastro</Text>
        </View>
        <View style={styles.base.formView}>
          <Form id="register" onSubmit={this.onSubmitCreate}>
            <Item underline style={styles.base.input}>
              <Input
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
                name="name"
                placeholder="Nome"
              />
            </Item>
            <Item underline style={styles.base.input}>
              <Input
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                name="email"
                placeholder="Email"
              />
            </Item>
            <Item underline style={styles.base.input}>
              <Input
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                secureTextEntry
                placeholder="Senha"
              />
            </Item>
          </Form>
        </View>
        <View style={styles.native.error}>
          <Text style={{'color': '#e61610'}}>{this.state.error}</Text>
        </View>
        <View style={styles.base.button}>
          <Button style={styles.base.buttonStyle} onPress={() => this.onSubmitCreate()}>
            <Text style={{ color: '#fff' }}>CADASTRAR</Text>
          </Button>
        </View>
      </View>
      </ScrollView>
    );
  }
}

export default Register;

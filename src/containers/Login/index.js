import React, { Component } from 'react';

import {
  View,
  Image,
  Text
} from 'react-native';

import { Item, Input, Form, Button } from 'native-base';

import * as styles from './styles'

class Login extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    return (
      <View>
        <View style={styles.natStyle.logo}>
          <Image
            source={require('../../assets/img/logo.png')}
            style={styles.natStyle.image}
          />
        </View>
        <View style={styles.natStyle.form}>
          <Form>
            <Item underline>
                <Input style={styles.baseStyle.inputs} placeholder="Email" />
            </Item>
            <Item underline>
                <Input style={styles.baseStyle.inputs} placeholder="Senha" />
            </Item>
          </Form>
        </View>
        <View>
          <View style={styles.baseStyle.buttonContainer}>
            <Button style={styles.baseStyle.button}>
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
    );
  }
}

Login.navigationOptions = props => {

}

export default Login;

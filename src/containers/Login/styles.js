import { StyleSheet } from 'react-native';

export const natStyle = StyleSheet.create({
  logo: {
    paddingTop: 30,
    paddingLeft: 130
  },
  image: {
    height: 120,
    width: 120
  },
  form: {
    width: 290,
    paddingLeft: 50,
    paddingTop: 30,
  },
  error: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const baseStyle = {
  inputs: {
    textAlign: 'center'
  },
  buttonContainer: {
    paddingLeft: 60,
    paddingTop: 10
  },
  button: {
    width: 240,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

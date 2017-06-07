import { StyleSheet } from 'react-native';

export const native = StyleSheet.create({
  imgContent: {
    paddingLeft: 20,
    paddingTop: 20
  },
  image: {
    width: 60,
    height: 60
  },
  title: {
    fontSize: 30
  },
  ttlContent: {
    position: 'absolute',
    top: 30,
    left: 120,
    right: 60
  },
  error: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const base = {
  formView: {
    paddingLeft: 20,
    paddingTop: 10,
    marginRight: 40
  },
  input: {
    paddingTop: 40
  },
  button: {
    paddingTop: 50,
    paddingLeft: 30,
    marginRight: 40
  },
  buttonStyle: {
    width: 290,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

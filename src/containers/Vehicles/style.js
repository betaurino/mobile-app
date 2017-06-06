import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  title: {
    color: '#ffffff'
  },
  header: {
    height: 65,
    backgroundColor: '#0045a8',
    paddingLeft: 20
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: 15
  }
})

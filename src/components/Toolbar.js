import { StyleSheet } from 'react-native';

import ToolbarAndroid from 'ToolbarAndroid';

const styles = StyleSheet.create({
  toolbar: {
    height: 65,
    backgroundColor: '#0045a8'
  }
});

const Toolbar = () => {

  return (
    <ToolbarAndroid
      title="Gas Tracker"
      titleColor='#ffffff'
      style={styles.toolbar}
    />
  );
}

export default Toolbar;

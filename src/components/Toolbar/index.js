import React from 'react';

import styles from './style';
import MenuIcon from '../MenuIcon';

const Toolbar = () => {

  return {
    title: 'Gas Tracker',
    headerTitleStyle: styles.title,
    headerStyle: styles.header,
    headerLeft: <MenuIcon />
  };
}

export default Toolbar;

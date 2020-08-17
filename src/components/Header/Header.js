import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

// Stateful
/*class Header extends React.Component {
  render() {
    <View>
      <Text>Header</Text>
    </View>
  }
}*/

// Stateless component
const Header = (props) => (
  <View style={styles.header}>
    <Text style={styles.text}>{props.label}</Text>
  </View>
);

export default Header;
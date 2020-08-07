import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  header: {
    height: 200,
    backgroundColor: '#3282B8',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  text: {
    fontSize: 35,
    color: '#1B262C'
  }
});

export default Header;
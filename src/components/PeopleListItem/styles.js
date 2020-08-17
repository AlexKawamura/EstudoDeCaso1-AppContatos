import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
    alignItems: 'center',
    flexDirection: 'row'
  },

  lineText: {
    flex: 7,
    fontSize: 20,
    paddingLeft: 15,
  },

  avatar: {
    flex: 1,
    aspectRatio: 1,
    marginLeft: 15,
    borderRadius: 50
  }
});

export default styles;
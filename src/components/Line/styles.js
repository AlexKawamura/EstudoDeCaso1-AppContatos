import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#C5C5C5'
  },

  cell: {
    paddingLeft: 5,
    fontSize: 16
  },

  label: {
    flex: 1,
    fontWeight: 'bold'
  },

  content: {
    flex: 3
  },

  longLabel: {
    fontSize: 12
  }
});

export default styles;
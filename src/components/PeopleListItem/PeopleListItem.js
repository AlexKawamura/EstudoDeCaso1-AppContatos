import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import capitalizeFirstLetter from '../../util/capitalizeFirstLetter';

import styles from './styles';

const PeopleListItem = props => {
  const { person, onPressItem } = props;
  const { title, first, last } = person.name;
  const { thumbnail } = person.picture;

  return (
    <TouchableOpacity onPress={() => { onPressItem({person}); }}>
      <View style={styles.line}>
        <Image source={{ uri: thumbnail }} style={styles.avatar} />

        <Text style={styles.lineText}>
          {
            capitalizeFirstLetter(title) + ' ' + 
            capitalizeFirstLetter(first) + ' ' + 
            capitalizeFirstLetter(last)
          }
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default PeopleListItem;
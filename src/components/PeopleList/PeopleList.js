import React from 'react';
import { FlatList } from 'react-native';

import PeopleListItem from '../PeopleListItem/PeopleListItem';

import styles from './styles';

const PeopleList = props => {
  const { people, onPressItem } = props;

  return (
    <FlatList
      style={styles.container}
      data={people}
      renderItem={
        ({ item }) => (
          <PeopleListItem person={item} onPressItem={onPressItem} />
        )
      }
      keyExtractor={ (item, index) => item.name.first+index}
    />
  );
}

export default PeopleList;
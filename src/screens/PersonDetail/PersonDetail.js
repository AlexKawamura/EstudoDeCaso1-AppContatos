import React from 'react';
import { View, Image } from 'react-native';
import Line from '../../components/Line/Line';

import styles from './styles';

export default class PersonDetail extends React.Component {
  render() {
    const { person } = this.props.navigation.state.params;
    const picURL = person.picture.large;

    return (
      <View style={styles.container}>
        <Image source={{ uri: picURL }} style={styles.avatar} />
        <View style={styles.detailContainer}>
          <Line label='E-mail:' content={person.email} />
          <Line label='Cidade:' content={person.location.city} />
          <Line label='Estado:' content={person.location.state} />
          <Line label='Celular:' content={person.cell} />
          <Line label='Nacionalidade:' content={person.nat} />
          <Line label='Profissão:' content={person.profissao} />
        </View>
      </View>
    );
  }
}
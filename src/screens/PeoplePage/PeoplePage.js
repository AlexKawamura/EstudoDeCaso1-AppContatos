import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import axios from 'axios';

import PeopleList from '../../components/PeopleList/PeopleList';

import styles from './styles';

export default class PeoplePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('https://randomuser.me/api?nat=br&results=10').then(response => {
      const { results } = response.data;

      this.setState({
        people: results,
        loading: false
      });
    }).catch(error => {
      this.setState({
        error: true,
        loading: false
      });
    });
  }

  renderList() {
    const textElements = this.state.people.map(person => {
      const { first } = person.name;

      return (
        <Text key={first}>{first}</Text>
      );
    });

    return textElements;
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading ? <ActivityIndicator size="large" color="#CBCBCB" /> 
          : this.state.error ? <Text style={styles.error}>Erro ao carregar lista de contatos...</Text> 
          : <PeopleList people={this.state.people} onPressItem={(params) => this.props.navigation.navigate('PersonDetail', params)} />
        }
      </View>
    );
  }
}

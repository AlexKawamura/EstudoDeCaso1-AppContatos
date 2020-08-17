import { createStackNavigator, createAppContainer } from 'react-navigation';

import PeoplePage from './src/screens/PeoplePage/PeoplePage';
import PersonDetail from './src/screens/PersonDetail/PersonDetail';
import capitalizeFirstLetter from './src/util/capitalizeFirstLetter';

const StackNavigator = createStackNavigator(
  {
    'Main': {
      screen: PeoplePage
    },
    'PersonDetail': {
      screen: PersonDetail,
      navigationOptions: ({navigation}) => {
        const personName = navigation.state.params.person.name.first;

        return ({
          title: capitalizeFirstLetter(personName),
          headerTitleStyle: {
            color: '#FFF',
            fontSize: 30
          }
        })
      }
    }
  },
  {
    defaultNavigationOptions: {
      title: 'Contatos',
      headerTitleStyle: {
        color: '#FFF',
        fontSize: 30,
        flexGrow: 1,
        textAlign: 'center'
      },
      headerStyle: {
        backgroundColor: '#6CA2F7'
      }
    }
  }
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
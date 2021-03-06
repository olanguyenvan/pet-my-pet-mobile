import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-elements'
import { Navigable } from '../../types/Navigable';
import PetListItem from './PetListItem';
import { AsyncStorage } from 'react-native';

interface AppState {
  name: string;
  pets: any;
}

interface Props extends Navigable {
}

export default class ProfileSettings extends React.Component<Props, AppState> {
  static navigationOptions = {
    title: 'Profile settings',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      pets: [],
    };
  }

  componentDidMount(){
    // TODO: query for pets, mocked objects for now
    this.setState({pets: [{name: "reksio", petType: "pies"}, {name: "reksio2", petType: "kotek"}]})
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <View style={{flex: 1, height: 100}}>
            <Avatar
              rounded
              large
              title="ON"
              activeOpacity={0.7}
            />
          </View>
          <View style={{flex: 1, height: 100}}>
            <Text style={textStyles.container}>Name: Ola</Text>
            <Text style={textStyles.container}>Surname: Nguyen Van</Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 25}}>Your pets</Text>
          {
            this.state.pets.map(pet =>
              <PetListItem key={pet.name} name={pet.name} petType={pet.petType}/>
            )
          }
          <Button
            title='Add pet'
            onPress={() => navigate('AddPetForm')}
            backgroundColor={'#fd7e5a'}
            fontSize={14}
            borderRadius={14}
            buttonStyle={{padding: 10}}
            containerViewStyle={{marginTop: 15, marginBottom: 15}}
          />
          <Button
            title='Logout'
            onPress={() => this.logout()}
            backgroundColor={'#333'}
            fontSize={14}
            borderRadius={14}
            buttonStyle={{padding: 10}}
            containerViewStyle={{marginTop: 30, marginBottom: 15}}
          />
        </View>
      </ScrollView>
    );
  }

  logout() {
    AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Login');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
});

const textStyles = StyleSheet.create({
  container: {
    padding: 5,
    fontSize: 15,
  }
});

import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements'
import { Navigable } from '../../types/Navigable';

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

  constructor(props){
    super(props);
    this.state = {
      name: null,
      pets: [],
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(){
    console.log(this.state.name)
  }


  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <Text>Name: Ola</Text>
        <Text>Surname: NV</Text>
        <Text>Your pets:</Text>
        <Button title='Add pet' backgroundColor='#138280' onPress={() => navigate('AddPetForm')}
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

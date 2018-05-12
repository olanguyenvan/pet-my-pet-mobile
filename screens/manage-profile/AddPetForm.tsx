import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements'

interface AppState {
  petName: string;
  petType: string;
}

export default class AddPetForm extends React.Component<{}, AppState > {
  static navigationOptions = {
    title: 'Add Pet',
    headerStyle: {
      backgroundColor: '#fd7e5a',
    },
    headerTintColor: '#fff',
  };

  constructor(props){
    super(props);
    this.state = {
      petName: null,
      petType: null,
    };
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(){
    console.log(this.state.petName, this.state.petType)
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <FormLabel>Pet name</FormLabel>
        <FormInput onChangeText={(formInput) => {this.setState({petName: formInput})}}/>
        <FormLabel>Pet type</FormLabel>
        <FormInput onChangeText={(formInput) => {this.setState({petType: formInput})}}/>
        {/*<FormValidationMessage>Error message</FormValidationMessage>*/}

        <Button
          title='Add pet'
          onPress={this.submitForm}
          backgroundColor={'#fd7e5a'}
          fontSize={14}
          borderRadius={14}
          buttonStyle={{padding: 10}}
          containerViewStyle={{marginTop: 15, marginBottom: 15}}
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

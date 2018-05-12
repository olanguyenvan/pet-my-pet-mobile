import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

interface AppState {
  pet: string,
  fromDate: any,
  toDate: any,
}


export default class AddCareRequest extends React.Component<{}, AppState > {
  static navigationOptions = {
    title: 'Add Care Request',
  };

  constructor(props){
    super(props);
    this.state = {
      pet: null,
      fromDate: null,
      toDate: null,
    };
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(){
    // TODO: api call to create offer
    console.log(this.state.pet, this.state.fromDate, this.state.toDate)
    // console.log(this.state.petName, this.state.petType)
  }

  render() {
    return (
      <ScrollView style={styles.container}>

    <FormLabel>Choose pet</FormLabel>
    <FormInput onChangeText={(formInput) => {this.setState({pet: formInput})}}/>
    <FormLabel>From</FormLabel>
    <FormInput onChangeText={(formInput) => {this.setState({fromDate: formInput})}}/>
    <FormLabel>To</FormLabel>
    <FormInput onChangeText={(formInput) => {this.setState({toDate: formInput})}}/>
    <Button
      title='Add offer'
      backgroundColor='#138280'
      onPress={this.submitForm}/>
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

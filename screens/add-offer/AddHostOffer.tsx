import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

interface AppState {
  petType: string,
  fromDate: any,
  toDate: any,
  location: any,
}


export default class AddHostOffer extends React.Component<{}, AppState > {
  static navigationOptions = {
    title: 'Add Host Offer',
  };

  constructor(props){
    super(props);
    this.state = {
      petType: null,
      fromDate: null,
      toDate: null,
      location: null,
    };
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(){
    // TODO: api call to create offer
    console.log(this.state.petType, this.state.fromDate, this.state.toDate, this.state.location)
    // console.log(this.state.petName, this.state.petType)
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <FormLabel>Pet name</FormLabel>
        <FormInput onChangeText={(formInput) => {this.setState({petType: formInput})}}/>
        <FormLabel>From</FormLabel>
        <FormInput onChangeText={(formInput) => {this.setState({fromDate: formInput})}}/>
        <FormLabel>To</FormLabel>
        <FormInput onChangeText={(formInput) => {this.setState({toDate: formInput})}}/>
        <FormLabel>Location</FormLabel>
        <FormInput onChangeText={(formInput) => {this.setState({location: formInput})}}/>

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

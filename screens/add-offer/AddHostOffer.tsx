import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import {dataPickerStyles} from './DataPickerConfig'

interface AppState {
  petType: string,
  startDate: string,
  endDate: string,
  location: any,
}


export default class AddHostOffer extends React.Component<{}, AppState > {
  static navigationOptions = {
    title: 'Add Host Offer',
  };

  constructor(props){
    super(props);
    let today = new Date().toISOString().split('T')[0];
    this.state = {
      petType: null,
      startDate: today,
      endDate: today,
      location: null,
    };
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(){
    // TODO: api call to create offer
    console.log(this.state.petType, this.state.startDate, this.state.endDate, this.state.location)
  }

  render() {

    return (
      <ScrollView style={styles.container}>

        <FormLabel>Pet name</FormLabel>
        <FormInput onChangeText={(formInput) => {this.setState({petType: formInput})}}/>
        <FormLabel>From</FormLabel>
        <DatePicker
          {...dataPickerStyles}
          date={this.state.startDate}
          onDateChange={(date) => {this.setState({startDate: date})}}
        />

        <FormLabel>To</FormLabel>
        <DatePicker
          {...dataPickerStyles}
          date={this.state.endDate}
          onDateChange={(date) => {this.setState({endDate: date})}}
        />
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

import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import {dataPickerStyles} from './DataPickerConfig'


interface AppState {
  pet: string,
  startDate: string,
  endDate: string,
}


export default class AddCareRequest extends React.Component<{}, AppState > {
  static navigationOptions = {
    title: 'Add Care Request',
  };

  constructor(props){
    super(props);
    let today = new Date().toISOString().split('T')[0];

    this.state = {
      pet: null,
      startDate: today,
      endDate: today,
    };
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(){
    // TODO: api call to create offer
    console.log(this.state.pet, this.state.startDate, this.state.endDate)
    // console.log(this.state.petName, this.state.petType)
  }

  render() {
    return (
      <ScrollView style={styles.container}>

    <FormLabel>Choose pet</FormLabel>
    <FormInput onChangeText={(formInput) => {this.setState({pet: formInput})}}/>
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

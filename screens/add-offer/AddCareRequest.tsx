import React from 'react';
import {Picker,ScrollView, StyleSheet, View} from 'react-native';
import { Button,  FormInput, FormLabel } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import { dataPickerStyles } from './DataPickerConfig'


interface AppState {
  petId: string,
  startDate: string,
  endDate: string,
  petOptionsToChoose: any,
}


export default class AddCareRequest extends React.Component<{}, AppState > {
  static navigationOptions = {
    title: 'Add Care Request',
  };

  constructor(props){
    super(props);
    let today = new Date().toISOString().split('T')[0];

    this.state = {
      petId: null,
      startDate: today,
      endDate: today,
      petOptionsToChoose: [],
    };
    this.submitForm = this.submitForm.bind(this)
  }

  componentDidMount(){
    // TODO: api call for list of pets
    this.setState({petOptionsToChoose: [
        {id: 1, name: "reksio"},
        {id: 2, name: "kotek"},
      ]})
  }

  submitForm(){
    // TODO: api call to create offer
    console.log(this.state.petId, this.state.startDate, this.state.endDate)
    // console.log(this.state.petName, this.state.petType)
  }

  render() {
    return (
      <ScrollView style={styles.container}>

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
        onDateChange={(date) => {this.setState({endDate: date})}}/>
        <View style={{paddingLeft: 10}}>
          <Picker
            selectedValue={this.state.petId}
            style={{ paddingLeft: 20, height: 50, width: '100%' }}
            onValueChange={itemValue => this.setState({petId: itemValue})}>
            { this.state.petOptionsToChoose.map(
              pet => <Picker.Item key={pet.id} label={pet.name} value={pet.id} />
            )}
          </Picker>
        </View>

      <Button
        title='Add offer'

        onPress={this.submitForm}backgroundColor={'#FC9842'}
        fontSize={14}
        borderRadius={14}
        buttonStyle={{padding: 10}}
        containerViewStyle={{marginTop: 15, marginBottom: 15}}/>
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

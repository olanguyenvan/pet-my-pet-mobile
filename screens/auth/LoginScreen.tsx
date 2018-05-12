import React from 'react';
import { Alert, Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements'
import { Navigable } from '../../types/Navigable';
import { Constants } from 'expo';
import { apolloClient } from '../../App';
import gql from 'graphql-tag';
import { AsyncStorage } from 'react-native';

interface State {
  email: string;
  password: string;
  loading: boolean;
};

export default class LoginScreen extends React.Component<Navigable, State> {
  inputs = {
    email: null,
    password: null
  };

  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      loading: false
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}></View>

        <View style={{flex: 1, width: '80%', justifyContent: 'center'}}>
          <View style={{alignItems: 'center', justifyContent: 'center', paddingBottom: 30}}>
            <Image source={require('../../assets/images/logo.png')} style={{resizeMode: 'contain', height: 180}} />
          </View>

          <KeyboardAvoidingView
            style={{justifyContent: 'center'}} behavior="padding" enabled>
          
            
            <FormLabel labelStyle={styles.formLabelStyle}>Email</FormLabel>
            <FormInput
              keyboardType='email-address'
              blurOnSubmit={false}
              onSubmitEditing={() => {
                this.inputs.password.focus()
              }}
              returnKeyType={'next'}
              ref={input => { this.inputs.email = input }}
              containerStyle={styles.containerInputStyle}
              inputStyle={styles.formInputStyle}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              underlineColorAndroid='transparent'
              placeholder="Enter your email"
            />

            <FormLabel labelStyle={styles.formLabelStyle}>Password</FormLabel>
            <FormInput secureTextEntry
              onSubmitEditing={() => {
                this.login()
              }}
              returnKeyType={'done'}
              ref={input => { this.inputs.password = input }}
              containerStyle={styles.containerInputStyle}
              inputStyle={styles.formInputStyle}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              underlineColorAndroid='transparent'
              placeholder="Enter your password"              
            />

            <Button
              onPress={() => this.login()}
              containerViewStyle={{marginLeft: 0, marginRight: 0, marginTop: 20}}
              fontSize={14}
              borderRadius={14}
              backgroundColor={'#FE5F75'}
              buttonStyle={{padding: 10}}
              title='Sign in'
              disabled={this.state.loading} />
          </KeyboardAvoidingView>

          <View style={styles.registerLinkContainer}>
            <Text style={styles.registerLink}
              onPress={() => this.createAccount()}>You need to create account?</Text>
          </View>
        </View>
      </View>
    )
  }

  async login () {
    Keyboard.dismiss()
    if (!this.state.email || !this.state.password) {
      Alert.alert('Authentication error', 'Please enter email and password')
      return;
    }

    this.setState({loading: true});
    
    const mutation = gql`mutation Login($email: String!, $password: String!) { login(email: $email, password: $password) }`;

    try {
      const response = await apolloClient.mutate({
        mutation,
        variables: {email: this.state.email, password: this.state.password},
      });

      if (!response || !response.data) {
        this.setState({loading: false});
        Alert.alert('Authentication error', 'Invalid credentials');
        return;
      }

      const token = response.data.login;

      AsyncStorage.setItem('token', token)
      this.props.navigation.navigate('Main');
    } catch (e) {
      Alert.alert('Authentication error', e.message);
      this.setState({loading: false});
    }
  }

  createAccount () {
    this.props.navigation.navigate('Register');
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  formInputStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 5,
    paddingBottom: 5,
    width: 'auto',
    minHeight: 0,
    marginLeft: 0,
    marginRight: 0,
    fontSize: 15,
  },
  formLabelStyle: {
    fontSize: 13,
    marginTop: 5,
    marginLeft: 0,
    marginBottom: 0,
    marginRight: 0,
    fontWeight: '400'
  },
  containerInputStyle: {
    marginLeft: 0,
    paddingLeft: 0,
    marginRight: 0
  },
  registerLinkContainer: {
    paddingTop: 30
  },
  registerLink: {
    fontSize: 16,
    color: '#777'
  },
  statusBar: {
    backgroundColor: "#FE5F75",
    height: Constants.statusBarHeight,
    width: '100%'
  },
})

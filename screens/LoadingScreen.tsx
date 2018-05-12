import React from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import { Navigable } from '../types/Navigable';

export default class LoadingScreen extends React.Component<Navigable> {
  constructor(props) {
    super(props);

    this.bootstrap();
  }

  render() {
    return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../assets/images/logo.png')} style={{width: '60%', resizeMode: 'contain'}} />
    </View>)
  }

  private async bootstrap() {
    const token = await AsyncStorage.getItem('token');

    setTimeout(() => this.props.navigation.navigate(token ? 'Main' : 'Auth'), 1000); 
  }
}
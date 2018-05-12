import React from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import { Navigable } from '../types/Navigable';
import { Constants } from 'expo';
import { StyleSheet } from 'react-native';

export default class LoadingScreen extends React.Component<Navigable> {
  constructor(props) {
    super(props);

    this.bootstrap();
  }

  render() {
    return (<View style={{flex: 1, height: '100%', alignItems: 'center',}}>
      <View style={styles.statusBar}></View>
      <Image source={require('../assets/images/logo.png')} style={{width: '60%', resizeMode: 'contain', marginTop: 60}} />
    </View>)
  }

  private async bootstrap() {
    const token = await AsyncStorage.getItem('token');

    setTimeout(() => this.props.navigation.navigate(token ? 'Main' : 'Auth'), 1000); 
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#FE5F75",
    height: Constants.statusBarHeight,
    width: '100%'
  },
})
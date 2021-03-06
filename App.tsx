import React from 'react';
import { AsyncStorage, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import ApolloClient, { gql } from 'apollo-boost'

import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';

Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
  obj.__proto__ = proto
  return obj
}

export interface AppProps {
  skipLoadingScreen: boolean;
  isLoadingComplete: boolean;
}

export const apolloClient = new ApolloClient({
  uri: "https://pet-my-pet-server.herokuapp.com/",
  request: async (operation) => {
    operation.setContext({
      headers: {
        authorization: await AsyncStorage.getItem('token'),
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    console.log(graphQLErrors);
    console.log(networkError);
  },
});

export default class App extends React.Component<AppProps> {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync as any}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
          <RootNavigation/>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...(Ionicons as any).font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({isLoadingComplete: true});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

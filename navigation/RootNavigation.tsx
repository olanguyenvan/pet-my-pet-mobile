import React from 'react';
import { Notifications } from 'expo';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoadingScreen from '../screens/LoadingScreen';
import { Navigable } from '../types/Navigable';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Loading: LoadingScreen,
  Auth: AuthStack,
  Main: MainTabNavigator,
}, {
  initialRouteName: 'Loading'
});

export default class RootNavigation extends React.Component {
  private _notificationSubscription;

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();  
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <AppNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}

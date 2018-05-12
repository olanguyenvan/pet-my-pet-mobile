import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/SettingsScreen';
import AddPetForm from '../screens/manage-profile/AddPetForm';
import BrowseStack from './BrowseStack';
import AddOfferStack from './AddOfferStack';


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  AddPetForm: AddPetForm,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',

  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-options` : 'md-options'}/>
  ),
};

export default createBottomTabNavigator({
  BrowseStack,
  AddOfferStack,
  SettingsStack,
}, {
  tabBarOptions: {
    activeTintColor: '#fd7e5a',
  }
});

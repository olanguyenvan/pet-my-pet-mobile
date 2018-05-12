import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddPetForm from '../screens/manage-profile/AddPetForm';
import BrowseStack from './BrowseStack';

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Add',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-add-circle` : 'md-add-circle'}/>
  ),
};

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
  LinksStack,
  SettingsStack,
});

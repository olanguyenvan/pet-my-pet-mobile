import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HostOfferListScreen from '../screens/browse/HostOfferListScreen';
import DetailsScreen from '../screens/browse/Details';
import CareRequestListScreen from '../screens/browse/CareRequestListScreen';

const ListTopNavigator = createMaterialTopTabNavigator({
  HostOffers: HostOfferListScreen,
  CareRequests: CareRequestListScreen,
}, {
  tabBarOptions: {
    activeTintColor: '#c900ff',
    inactiveTintColor : '#3b00ff',
    style: {
      backgroundColor: '#fff',
    }
  },
});

ListTopNavigator.navigationOptions = {
  headerStyle: {height: 0},
};

const BrowseStack = createStackNavigator({
  Home: ListTopNavigator,
  Details: DetailsScreen,
});

BrowseStack.navigationOptions = {
  tabBarLabel: 'Browse',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-list` : 'md-list'}/>
  ),
};

export default BrowseStack;

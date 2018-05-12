import React from 'react';
import { Platform } from 'react-native';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  TabView,
} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HostOfferListScreen from '../screens/browse/HostOfferListScreen';
import DetailsScreen from '../screens/browse/Details';
import CareRequestListScreen from '../screens/browse/CareRequestListScreen';
import { noHeaderNavigationOptions, tabNavigatorStylings } from './tabNavigatorStylings';
import MapScreen from '../screens/browse/MapScreen';

const ListTopNavigator = createMaterialTopTabNavigator({
  HostOffers: HostOfferListScreen,
  CareRequests: CareRequestListScreen,
}, tabNavigatorStylings);

ListTopNavigator.navigationOptions = noHeaderNavigationOptions;

const BrowseStack = createStackNavigator({
  Home: ListTopNavigator,
  HostOffersMap: MapScreen,
  Details: DetailsScreen,
});

BrowseStack.navigationOptions = {
  tabBarLabel: 'Browse',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-list` : 'md-list'}/>
  ),
};

export default BrowseStack;

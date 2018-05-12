import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import AddCareRequest from '../screens/add-offer/AddCareRequest';
import AddHostOffer from '../screens/add-offer/AddHostOffer';
import { noHeaderNavigationOptions, tabNavigatorStylings } from './tabNavigatorStylings';

const AddOfferTopNavigator = createMaterialTopTabNavigator({
  HostOffers: AddHostOffer,
  CareRequests: AddCareRequest,
}, tabNavigatorStylings);

AddOfferTopNavigator.navigationOptions = noHeaderNavigationOptions;

const AddOfferStack = createStackNavigator({
  Home: AddOfferTopNavigator,
});

AddOfferStack.navigationOptions = {
  tabBarLabel: 'Add',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-add-circle` : 'md-add-circle'}/>
  ),
};

export default AddOfferStack;

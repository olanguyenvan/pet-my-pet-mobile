import React from 'react';
import { MaterialTopTabBar } from 'react-navigation-tabs';

export const tabNavigatorStylings = {
  tabBarComponent: props => {
    const backgroundColor = props.position.interpolate({
      inputRange: [0, 1],
      outputRange: ['#c900ff', '#3b00ff'],
    });
    return (
      <MaterialTopTabBar {...props} style={{backgroundColor}}/>
    );
  },
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: 'rgba(255,255,255,.8)',
    indicatorStyle: {
      backgroundColor: 'rgba(255,255,255,.8)',
    },
  },
};

export const noHeaderNavigationOptions = {
  headerStyle: {height: 0, elevation: 0},
};

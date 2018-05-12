import React from 'react';
import { StatusBar } from 'react-native';
import { MaterialTopTabBar } from 'react-navigation-tabs';

export const tabNavigatorStylings = {
  tabBarComponent: props => {
    const backgroundColor = props.position.interpolate({
      inputRange: [0, 1],
      outputRange: ['#FE5F75', '#FC9842'],
    });

    const styles = {
      backgroundColor,
      paddingTop: StatusBar.currentHeight,
    };
    return (
      <MaterialTopTabBar
        {...props}
        labelStyle={{fontSize: 18, fontWeight: 'bold'}}
        upperCaseLabel={false}
        style={styles}
      />
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
  header: null,
};

//fd7e5a

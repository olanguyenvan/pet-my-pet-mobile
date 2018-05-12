import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import ProfileSettings from './manage-profile/ProfileSettings';
import { Navigable } from '../types/Navigable';

interface SettingsScreenProps extends Navigable {
}

export default class SettingsScreen extends React.Component<SettingsScreenProps> {
  static navigationOptions = {
    title: 'Profile settings',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ProfileSettings
          navigation={this.props.navigation}/>;
  }
}

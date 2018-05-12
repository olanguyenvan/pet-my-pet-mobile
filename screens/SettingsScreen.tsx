import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import ProfileSettings from "./manage-profile/ProfileSettings";

interface Props {
  navigation: any;
}

export default class SettingsScreen extends React.Component<Props, {} > {
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

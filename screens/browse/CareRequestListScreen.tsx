import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Navigable } from '../../types/Navigable';
import { CareRequestList } from './CareRequestList';
import { CareRequestProps } from './CareRequestListItem';

interface State {
  careRequests: CareRequestProps[];
}

export default class CareRequestListScreen extends React.Component<Navigable, State> {
  constructor(props) {
    super(props);

    this.state = {
      careRequests: []
    };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.setState({careRequests: [
      { author:'Klaudia' }
    ]});
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <CareRequestList careRequests={this.state.careRequests} navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

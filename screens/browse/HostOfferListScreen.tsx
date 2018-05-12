import React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Navigable } from '../../types/Navigable';
import  HostOfferList  from './HostOfferList';
import { HostOfferProps } from './HostOfferListItem';

interface State {
  hostOffers: HostOfferProps[];
}

export default class HostOfferListScreen extends React.Component<Navigable, State> {
  constructor(props) {
    super(props);

    this.state = {
      hostOffers: []
    };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.setState({hostOffers: [
      { author:'Klaudia' }
    ]});
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <HostOfferList hostOffers={this.state.hostOffers} navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

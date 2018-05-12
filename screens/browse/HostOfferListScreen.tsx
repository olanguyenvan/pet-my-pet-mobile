import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Navigable } from '../../types/Navigable';
import {default as HostOfferListItem, HostOfferProps} from './HostOfferListItem';

interface State {
  hostOffers: HostOfferProps[];
}

export default class HostOfferListScreen extends React.Component<Navigable, State> {
  constructor(props) {
    super(props);

    this.state = {
      hostOffers: [],
    }
  }

  static navigationOptions = {
    title: 'Host Offers',
  };

  componentDidMount() {
    this.setState({
      hostOffers: [{
        id: 1,
        author: "ola",
        startDate: "2018-05-10",
        endDate: "2018-05-11",
        location: "Rynek Główny, Kraków",
      }]
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          { this.state.hostOffers.map(
            hostOffer => <HostOfferListItem
              key={hostOffer.id}
              id={hostOffer.id}
              author={hostOffer.author}
              startDate={hostOffer.startDate}
              endDate={hostOffer.endDate}
              location={hostOffer.location}
            />
          )}

        </View>
        {/*<HostOfferList hostOffers={this.state.hostOffers} navigation={this.props.navigation} />*/}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

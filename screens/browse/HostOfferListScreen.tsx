import React from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Navigable } from '../../types/Navigable';
import { default as HostOfferListItem, HostOfferProps } from './HostOfferListItem';

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
      },
      {
        id: 2,
        author: "Klaudzia",
        startDate: "2018-05-15",
        endDate: "2018-05-16",
        location: "Prokocim, Kraków",
      }
      ]
    });
  }

  showMap = () => this.props.navigation.navigate('HostOffersMap', {offers: this.state.hostOffers});

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button title={'Show map'} onPress={this.showMap}/>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

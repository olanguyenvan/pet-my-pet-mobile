import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Navigable } from '../../types/Navigable';
import { default as HostOfferListItem, HostOfferProps } from './HostOfferListItem';
import gql from "graphql-tag";
import {apolloClient} from "../../App";

interface State {
  hostOffers: any;
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
    apolloClient.query({
      query: gql`query { 
        hostOffers{
          id 
          start 
          end 
        }
      }`,
      fetchPolicy: 'network-only'
    }).then(resp => {
      if (resp !== null){
        this.setState({hostOffers: resp.data['hostOffers']})
      }
    });
  }

  showMap = () => this.props.navigation.navigate('HostOffersMap', {offers: this.state.hostOffers});

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
          onPress={this.showMap}
          containerViewStyle={{marginTop: 15, marginBottom: 15}}
          fontSize={14}
          borderRadius={14}
          backgroundColor={'#FE5F75'}
          buttonStyle={{padding: 10}}
          title='Show map'/>
        <View>
          { this.state.hostOffers.map(
            hostOffer => <HostOfferListItem
              key={hostOffer.id}
              id={hostOffer.id}
              author={'<author>'}
              startDate={hostOffer.start}
              endDate={hostOffer.end}
              location={'Krakow'}
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
    backgroundColor: '#fff',
  },
});

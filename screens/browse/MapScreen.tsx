import React from 'react';
import { StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Navigable } from '../../types/Navigable';
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';

declare module 'expo' {
  export const MapView: any;
  export const Marker: any;
}

interface State {
  markers: any[];
}

export default class MapScreen extends React.Component<Navigable, State> {
  static navigationOptions = {
    title: 'Map',
  };

  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    }
  }

  componentDidMount() {
    this.setState({
      markers: [
        {id: 1, title: 'Pin A', coordinate: {latitude: 50.0485203, longitude: 19.9556348}},
        {id: 2, title: 'Pin B', coordinate: {latitude: 50.0505203, longitude: 19.9556748}},
      ],
    })
  }

  render() {
    const markers = this.props.navigation.getParam('offers').map(offer => ({offer, coordinate: randomizeCoordinate()}));
    return (
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 50.0485203,
          longitude: 19.9556348,
          latitudeDelta: 0.04,
          longitudeDelta: 0.02,
        }}
      >
        {markers.map(marker => (
          <Marker key={marker.offer.id} coordinate={marker.coordinate} title={marker.offer.author} description={'Hello'}/>
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


function randomizeCoordinate() {
  return {latitude: 50.0485203 + miniRand(), longitude: 19.9556348 + miniRand()};
}

function miniRand() {
  return Math.random() * 0.01 - 0.005;
}

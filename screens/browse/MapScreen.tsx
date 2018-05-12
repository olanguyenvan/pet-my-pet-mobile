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
    return (
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 50.0485203,
          longitude: 19.9556348,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >
        {this.state.markers.map(marker => (
          <Marker key={marker.id} coordinate={marker.coordinate} title={marker.title} description={'Hello'}/>
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



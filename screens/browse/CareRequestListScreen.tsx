import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Navigable } from '../../types/Navigable';
import { CareRequestProps, default as CareRequestListItem } from './CareRequestListItem';

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
    title: 'Care Requests',
  };

  componentDidMount() {
    this.setState({careRequests: [
      {
        id: 1,
        author:'Klaudia',
        startDate: "2018-10-11",
        endDate: "2018-10-13",
        pets: ["reksio", "kiciuś"],
      }
    ]});
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.careRequests.map(
          careRequest =>
            <CareRequestListItem
              key={careRequest.id}
              id={careRequest.id}
              author={careRequest.author}
              startDate={careRequest.startDate}
              endDate={careRequest.endDate}
              pets={careRequest.pets}
            />
        )}
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

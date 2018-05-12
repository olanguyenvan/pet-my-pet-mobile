import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Navigable } from '../../types/Navigable';
import { CareRequestProps, default as CareRequestListItem } from './CareRequestListItem';
import gql from "graphql-tag";
import {apolloClient} from "../../App";

interface State {
  careRequests: any;
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
    apolloClient.query({
      query: gql`query { 
        careRequests{
          id 
          start 
          end 
        }
      }`,
      fetchPolicy: 'network-only'
    }).then(resp => {
      if (resp !== null){
        this.setState({careRequests: resp.data['careRequests']})
      }
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.careRequests.map(
          careRequest =>
            <CareRequestListItem
              key={careRequest.id}
              id={careRequest.id}
              author={'<author>'}
              startDate={careRequest.start}
              endDate={careRequest.end}
              pets={'<pets>'}
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

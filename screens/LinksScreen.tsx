import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import AddHostOffer from "./add-offer/AddHostOffer";
import AddCareRequest from "./add-offer/AddCareRequest";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Add offer',
  };

  render() {

    return (
      <ScrollView style={styles.container}>
        <AddHostOffer/>
        <AddCareRequest/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

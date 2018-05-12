import React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { MonoText } from '../../components/StyledText';
import { Navigable } from '../../types/Navigable';

export default class HostOfferListScreen extends React.Component<Navigable> {

  render() {
    return (
      <ScrollView style={styles.container}>
        <MonoText>Host Offers!!</MonoText>
        <Button title="Dummy navigation" onPress={() => this.props.navigation.navigate('Details')}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { MonoText } from '../../components/StyledText';
import { Navigable } from '../../types/Navigable';

export default class DetailsScreen extends React.Component<Navigable> {

  render() {
    return (
      <ScrollView style={styles.container}>
        <MonoText>Details</MonoText>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { MonoText } from '../../components/StyledText';
import { Navigable } from '../../types/Navigable';

export default class CareRequestListScreen extends React.Component<Navigable> {
  static navigationOptions = {
    title: 'Care Requests',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <MonoText>Care Requests</MonoText>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

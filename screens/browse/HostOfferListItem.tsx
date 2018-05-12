import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export interface HostOfferProps{
  style?: any;
  id?: number;
  author?: string;
  start?: string;
  end?: string;
  location?: string;
}

export default class HostOfferListItem extends React.Component<HostOfferProps> {
  render() {
    return <View>
      <Text style={styles.authorStyle}>{this.props.author}</Text>
      <Text style={styles.dateStyle}>14.03.2016</Text>
      <Text style={styles.dateStyle}>20.05.2018</Text>
      <Text style={styles.location}>{this.props.location}</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  authorStyle: {
    fontSize: 13
  },
  dateStyle:{
    fontSize: 11
  },
  location: {
    fontSize: 18
  }
})
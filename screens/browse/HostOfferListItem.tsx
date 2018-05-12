import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export interface HostOfferProps{
  id: number;
  author: string;
  startDate: string;
  endDate: string;
  location: string;
}

export default class HostOfferListItem extends React.Component<HostOfferProps> {
  render() {
    return <View style={styles.listItemStyle}>
      <Text style={styles.authorStyle}>{this.props.author}</Text>
      <Text style={styles.dateStyle}>{this.props.startDate}</Text>
      <Text style={styles.dateStyle}>{this.props.endDate}</Text>
      <Text style={styles.location}>{this.props.location}</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  listItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  },
  authorStyle: {
    fontSize: 13
  },
  dateStyle:{
    fontSize: 11
  },
  location: {
    fontSize: 18
  }
});

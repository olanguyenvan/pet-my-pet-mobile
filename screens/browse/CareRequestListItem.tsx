import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export interface CareRequestProps{
  id: number;
  author: string;
  startDate: string;
  endDate: string;
  pets: string[];
}

export default class CareRequestListItem extends React.Component<CareRequestProps> {
  render() {
    return <View style={styles.listItemStyle}>
      <Text style={styles.authorStyle}>{this.props.author}</Text>
      <Text style={styles.dateStyle}>{this.props.startDate}</Text>
      <Text style={styles.dateStyle}>{this.props.endDate}</Text>
      <Text style={styles.dateStyle}>{this.props.pets}</Text>
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
  listItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  }
});

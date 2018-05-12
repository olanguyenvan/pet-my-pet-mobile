import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export interface CareRequestProps{
  style?: any;
  id?: number;
  author?: string;
  start?: string;
  end?: string;
  pets?: string[];
}

export default class CareRequestListItem extends React.Component<CareRequestProps> {
  render() {
    return <View>
      <Text style={styles.authorStyle}>{this.props.author}</Text>
      <Text style={styles.dateStyle}>14.03.2016</Text>
      <Text style={styles.dateStyle}>16.05.2017</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  authorStyle: {
    fontSize: 13
  },
  dateStyle:{
    fontSize: 11
  }
})
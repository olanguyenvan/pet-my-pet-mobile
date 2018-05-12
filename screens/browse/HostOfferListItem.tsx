import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

interface Props{
  userName: string;
  start: Date;
  end: Date;
  location: string;
}

export default class HostOfferListItem extends React.Component<Props> {
  render() {
    return <View>
    
      <Text>{this.props.userName}</Text>
      <Text>{this.props.start}</Text>
      <Text>{this.props.end}</Text>
      <Text>{this.props.location}</Text>

    </View>
  }
}
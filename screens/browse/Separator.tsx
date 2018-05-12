import React from 'react'
import { View } from 'react-native'

export class Separator extends React.Component {
  render () {
    return (
      <View style={{ height: 1, backgroundColor: '#f3f4f6', width: '100%' }} />
    )
  }
}
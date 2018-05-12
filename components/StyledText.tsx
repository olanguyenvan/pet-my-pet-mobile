import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

export interface MonoTextProps {
  style?: StyleProp<TextStyle>;
}

export class MonoText extends React.Component<MonoTextProps> {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}

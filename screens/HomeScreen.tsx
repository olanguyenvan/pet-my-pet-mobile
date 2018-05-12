import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { CareRequestList } from './browse/CareRequestList';
import { CareRequestProps } from './browse/CareRequestListItem';

interface Props {
  navigation: any;
  
}

interface State {
  
  careRequests: CareRequestProps[];
}

export default class HomeScreen extends React.Component<Props, State > {
  constructor(props) {
    super(props);

    this.state = {
      careRequests: []
    };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.setState({careRequests: [
      { author:'Klaudia' }
    ]});
  }

  render() {
    
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <CareRequestList careRequests={this.state.careRequests} navigation={this.props.navigation} />
        </View>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  }
})
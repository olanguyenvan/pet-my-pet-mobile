import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

export interface HostOfferProps {
  id: number;
  author: string;
  startDate: string;
  endDate: string;
  location: string;
  showAvatar?: boolean;
}

const mockedHostsAvatarsUrls = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChBGiGQyE2GiBK6q1TE7yOVL8-fmUZnFOhIFCYDB4Ap9Zm8zTMg',
  'https://www.shareicon.net/download/2016/05/24/769978_man_512x512.png',
  'https://st2.depositphotos.com/1007566/12043/v/950/depositphotos_120433444-stock-illustration-man-male-avatar-young-icon.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvr-vGX8tr-9SIhMb8mzAYiCgs7jPCfDaDtVT1ln2jJqrUC3dAQ',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4ErGLQ_s1g97EaymktXAK7STd2BCNkRuKWmbBCGVqnfKYcju',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJGMi4qn2c1-rgrn2InhqckkuBMS00lUwn6HEJ4GCKFB37-x4Xg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg73Er_2y2eObBW0aYmQnm7LZJRjce3rH0jrvPnLldt7izMKOhtw',
];

export default class HostOfferListItem extends React.Component<HostOfferProps> {
  static defaultProps = {
    showAvatar: true
  };

  render() {
    return <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', padding: 10}}>
        {this.props.showAvatar && <View style={{flex: 1, height: 100}}>
        <Avatar
          rounded
          large
          source={{uri: mockedHostsAvatarsUrls[Math.floor(Math.random() * mockedHostsAvatarsUrls.length)]}}
          activeOpacity={0.7}
        />
      </View>}
      <View style={{flex: 2, height: 100}}>
        <Text style={styles.container}>{this.props.author}</Text>
        <Text style={styles.container}>{this.props.startDate} - {this.props.endDate}</Text>
        <Text style={styles.container}>{this.props.location}</Text>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
  },
});

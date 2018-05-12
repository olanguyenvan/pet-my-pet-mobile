import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {Avatar, Icon} from "react-native-elements";

export interface CareRequestProps{
  id: number;
  author: string;
  startDate: string;
  endDate: string;
  pets: any;
}

const mockedAnimalAvatarsUrls = [
  "https://cdn0.iconfinder.com/data/icons/animal-icons-flat/128/dog-256.png",
  "https://usercontent2.hubstatic.com/6763071.jpg",
  "https://pbs.twimg.com/profile_images/724175998426570752/FuNY_eUk_400x400.jpg",
  "http://s3.party.pl/styl-zycia/dom/pies-czeka-na-karmienie-407889-article.jpg",
  "https://littleheroes.pl/modules//smartblog/images/18-single-default.jpg",
  "http://www.tapeta-jamnik-pies-krotkowlosy-szczeniak.na-pulpit.com/zdjecia/jamnik-pies-krotkowlosy-szczeniak.jpeg",
];

export default class CareRequestListItem extends React.Component<CareRequestProps> {
  render() {
    return <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', padding: 10}}>
      <View style={{flex: 1, height: 100}}>
        <Avatar
          rounded
          large
          source={{uri: mockedAnimalAvatarsUrls[Math.floor(Math.random() * mockedAnimalAvatarsUrls.length)]}}
          activeOpacity={0.7}
        />
      </View>
      <View style={{flex: 2, height: 100}}>
         <View style={styles.textWithIcon}>
          <Icon name={"person"}/><Text style={styles.text}>{this.props.author}</Text>
        </View>
        <View style={styles.textWithIcon}>
          <Icon name={"date-range"}/><Text style={styles.text}>{this.props.startDate} - {this.props.endDate}</Text>
        </View>
        <View style={styles.textWithIcon}>
          <Icon name={"pets"}/><Text style={styles.text}>{this.props.pets}</Text>
        </View>
      </View>
    </View>
  }
}



const styles = StyleSheet.create({
  text: {
    flex: 1,
    textAlign: 'left',
    paddingLeft: 10,
  },
  textWithIcon: {
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'space-between',
  },
});

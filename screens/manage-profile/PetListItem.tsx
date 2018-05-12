import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar, Button} from 'react-native-elements'


interface Props {
  name: string;
  petType: any;
}

const mockedAnimalAvatarsUrls = [
  "https://cdn0.iconfinder.com/data/icons/animal-icons-flat/128/dog-256.png",
  "https://usercontent2.hubstatic.com/6763071.jpg",
  "https://pbs.twimg.com/profile_images/724175998426570752/FuNY_eUk_400x400.jpg",
  "http://s3.party.pl/styl-zycia/dom/pies-czeka-na-karmienie-407889-article.jpg",
  "https://littleheroes.pl/modules//smartblog/images/18-single-default.jpg",
  "http://www.tapeta-jamnik-pies-krotkowlosy-szczeniak.na-pulpit.com/zdjecia/jamnik-pies-krotkowlosy-szczeniak.jpeg",
];

export default class PetListItem extends React.Component<Props> {

  render() {

    return (
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <View style={{flex: 1, height: 100}}>
            <Avatar
              rounded
              large
              source={{uri: mockedAnimalAvatarsUrls[Math.floor(Math.random()*mockedAnimalAvatarsUrls.length)]}}

              activeOpacity={0.7}
            />
          </View>
          <View style={{flex: 1, height: 100}}>
            <Text style={textStyles.container}>{this.props.petType}</Text>
            <Text style={textStyles.container}>{this.props.name}</Text>
          </View>
        </View>
    );
  }
}

const textStyles = StyleSheet.create({
  container: {
    padding: 5,
  }
});

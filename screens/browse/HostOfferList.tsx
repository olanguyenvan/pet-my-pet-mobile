import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Separator } from './Separator'
import HostOfferListItem, { HostOfferProps } from './HostOfferListItem';

interface Props{
  hostOffers: HostOfferProps[];
  navigation: any;
}

export default class HostOfferList extends React.Component<Props> {
  render() {
    return (<View>
        <Separator />
        <FlatList data={this.props.hostOffers}
          keyExtractor={(item, index) => String(item.id)}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) => (
            <View>
              <HostOfferListItem id={item.id} style={styles.listItemStyle} />
            </View>
          )} />
        <Separator />
      </View>)
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
  }
})
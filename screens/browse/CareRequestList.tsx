import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import CareRequestListItem, { CareRequestProps } from './CareRequestListItem'
import { Separator } from './Separator'

interface Props{
  careRequests: CareRequestProps[];
  navigation: any;
}

export class CareRequestList extends React.Component<Props> {
  render() {
    return (<View>
        <Separator />
        <FlatList data={this.props.careRequests}
          keyExtractor={(item, index) => String(item.id)}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) => (
            <View>
              <CareRequestListItem id={item.id} style={styles.listItemStyle} />
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
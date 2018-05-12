import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Button, Avatar} from 'react-native-elements'
import { Navigable } from '../../types/Navigable';
import PetListItem from "./PetListItem";

interface AppState {
  name: string;
  pets: any;
}

interface Props extends Navigable {
}

export default class ProfileSettings extends React.Component<Props, AppState> {
  static navigationOptions = {
    title: 'Profile settings',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      pets: [],
    };
  }

  componentDidMount(){
    // TODO: query for pets, mocked objects for now
    this.setState({pets: [{name: "reksio", petType: "pies"}, {name: "reksio2", petType: "kotek"}]})
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <View style={{flex: 1, height: 100}}>
            <Avatar
              rounded
              large
              title="ON"
              activeOpacity={0.7}
            />
          </View>
          <View style={{flex: 1, height: 100}}>
            <Text style={textStyles.container}>Name: Ola</Text>
            <Text style={textStyles.container}>Surname: Nguyen Van</Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 25}}>Your pets</Text>
          {
            this.state.pets.map(pet =>
              <PetListItem key={pet.name} name={pet.name} petType={pet.petType}/>
            )
          }
          <Button title='Add pet'
                  backgroundColor='#138280'
                  onPress={() =>
                    navigate('AddPetForm', {})
                  }
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
});

const textStyles = StyleSheet.create({
  container: {
    padding: 5,
    fontSize: 15,
  }
});

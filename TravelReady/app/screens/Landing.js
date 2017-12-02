import React, { Component } from "react";
import { View, StyleSheet, AppRegistry, Image } from "react-native";
import { Text, Button } from 'react-native-elements';

export default class Landing extends Component {

  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return (
      <View style={styles.container}>
      <Text h1 style={styles.titleText}>Travel Ready</Text>
      <Text style={styles.subtext}>Traveling for the non-traveler</Text>
      <Button
      large
      title='Click here to start'
      backgroundColor='#225A7F'
      onPress={() => {
        this.props.navigation.navigate("Options");
      }}
      raised />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9BD6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    color: '#225A7F',
    marginBottom: 3,
    fontFamily: 'Helvetica',
  },
  subtext: {
    marginBottom: 50,
    fontFamily: 'Helvetica',
  }
});

  AppRegistry.registerComponent('Landing', () => Landing);

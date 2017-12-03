import React, { Component } from 'react';
import { View, StyleSheet, AppRegistry, Image } from "react-native";
import { Text, Button, SearchBar } from 'react-native-elements';

export default class Tips extends Component {

  constructor(props){
    super(props);

    this.state = {
      text: ''
    }
  }

  render(){
    return (
      <View style={styles.container}>
      <Text> Looks like you are going to {this.props.navigation.state.params.location}! </Text>
      <Button style={styles.click}
      title='Click to continue'
      backgroundColor='#225A7F'
      onPress={() => {
        this.props.navigation.navigate("Landing");
      }}
 />
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
  click: {
    marginTop: 30,
  },
});

AppRegistry.registerComponent('Tips', () => Tips);

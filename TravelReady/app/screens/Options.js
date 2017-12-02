import React, { Component } from 'react';
import { View, StyleSheet, AppRegistry, Image } from "react-native";
import { Text, Button, SearchBar } from 'react-native-elements';

export default class Options extends Component {

  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return (
      <View style={styles.container}>
      <SearchBar style={styles.searchb}
      lightTheme
      onChangeText={(text) => this.setState({query: text})}
      onClearText={(text) => this.setState({query: ""})}
      placeholder='Where are you heading?'
      />
      <Button style={styles.click}
      title='Search for tips'
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
  click: {
    marginTop: 30,
  },
});

AppRegistry.registerComponent('Options', () => Options);

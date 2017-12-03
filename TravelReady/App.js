import React from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { StackNavigator, TabNavigator } from "react-navigation";
import Landing from "./app/screens/Landing";
import Options from "./app/screens/Options";
import Tips from "./app/screens/Tips";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export default class App extends React.Component {

  render() {
    return (
      <Navigate />
    )
  }
}

export const Navigate = StackNavigator(
  {
    Landing: {
      screen: Landing,
      navigationOptions: {
        header: null,
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        header: null,
      },
    },
    Tips: {
      screen: Tips,
      navigationOptions: {
        header: null,
      },
    },
  },
  { headerMode: 'screen' }
);

import React, { Component } from 'react';
import { View, StyleSheet, AppRegistry, Image } from "react-native";
import { Text, Button, SearchBar } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const homePlace = {description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = {description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};


export default class Options extends Component {

  constructor(props){
    super(props);

    this.state = {
      search: ''
    }
  }

  render() {
    return (
      <GooglePlacesAutocomplete
      placeholder='Where are you going?'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      fetchDetails={true}
      onChangeText={(text) => this.setState({search: text})}
      onClearText={(text) => this.setState({search: ""})}
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
      this.props.navigation.navigate("Tips", {location: details.formatted_address});
      console.log(details);
    }}
    getDefaultValue={() => {
      return ''; // text input default value
    }}
    query={{
      // available options: https://developers.google.com/places/web-service/autocomplete
      key: 'AIzaSyCBiRXXfFXGQ3pr1hrbYZqxe6CJeR_OJlE',
      language: 'en', // language of the results
      types: '(cities)', // default: 'geocode'
    }}
    styles={{
      description: {
        fontWeight: 'bold',
      },
      container: {
        backgroundColor: '#9BD6FF',
      },
      textInput: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 150,
        height: 38,
        fontSize: 16
      },
      listView: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 150,
        height: 38
      },
      predefinedPlacesDescription: {
        color: '#1faadb',
      },
    }}

    currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
    currentLocationLabel="Current location"
    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
    GoogleReverseGeocodingQuery={{
      // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
    }}


    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities


    predefinedPlacesAlwaysVisible={false}
    />
  );
}

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9BD6FF',
  },
  click: {
    marginTop: 30,
  },
});

AppRegistry.registerComponent('Options', () => Options);

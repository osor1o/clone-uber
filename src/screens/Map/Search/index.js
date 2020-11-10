import React from 'react';
import {Platform} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from 'react-native-dotenv';

export default () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Para onde?"
      onPress={(data, details) => {
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: 'pt',
      }}
      textInputProps={{
        autoCapitalize: 'none',
        autoCorrect: false,
      }}
      fetchDetails
      enablePoweredByContainer={false}
      styles={{
        container: {
          position: 'absolute',
          top: Platform.select({ios: 60, android: 40}),
          width: '100%',
        },
        textInputContainer: {
          flex: 1,
          backgroundColor: 'transparent',
          height: 56,
          marginHorizontal: 24,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        textInput: {
          height: 56,
          borderRadius: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 24,
          paddingRight: 24,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          marginTop: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {x: 0, y: 0},
          shadowRadius: 15,
          borderWidth: 1,
          borderColor: '#DDD',
          fontSize: 16,
        },
        listView: {
          borderWidth: 1,
          borderColor: '#DDD',
          backgroundColor: 'white',
          marginHorizontal: 24,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {x: 0, y: 0},
          shadowRadius: 15,
          marginTop: 8,
        },
        description: {
          fontSize: 16,
        },
        row: {
          padding: 20,
          height: 64,
        },
        predefinedPlacesDescription: {
          color: '#333',
        },
      }}
    />
  );
};

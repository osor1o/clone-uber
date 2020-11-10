import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY} from 'react-native-dotenv';

export default ({destination, origin, onReady}) => {
  return (
    <MapViewDirections
      origin={origin}
      destination={destination}
      onReady={onReady}
      apikey={GOOGLE_MAPS_API_KEY}
      strokeWidth={3}
      strokeColor="#222"
    />
  );
};

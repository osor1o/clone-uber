import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Search from './Search';
import Directions from './Directions';
import {getPixelSize} from '../../utils';
import markerImage from '../../assets/marker.png';
import styles from './styles';

export default () => {
  const navigation = useNavigation();

  const [region, setRegion] = useState(null);
  const [destination, setDestination] = useState(null);

  const mapViewRef = useRef(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        });
      },
      () => {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Permissions',
            },
          ],
        });
      },
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );
  }, [navigation]);

  const handleLocationSelected = (data, {geometry}) => {
    const {
      location: {lat: latitude, lng: longitude},
    } = geometry;

    setDestination({
      latitude,
      longitude,
      title: data.structured_formatting.main_text,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        showsUserLocation
        loadingEnabled
        ref={mapViewRef}>
        {destination && (
          <>
            <Directions
              origin={region}
              destination={destination}
              onReady={(result) => {
                mapViewRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: getPixelSize(24),
                    left: getPixelSize(24),
                    bottom: getPixelSize(24),
                    top: getPixelSize(24),
                  },
                });
              }}
            />
            <Marker
              coordinate={destination}
              anchor={{x: 0, y: 0}}
              image={markerImage}
            />
          </>
        )}
      </MapView>
      <Search onLocationSelected={handleLocationSelected} />
    </SafeAreaView>
  );
};

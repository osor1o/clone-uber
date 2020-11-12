import React, {useEffect, useState, useRef} from 'react';
import {GOOGLE_MAPS_API_KEY} from 'react-native-dotenv';
import {SafeAreaView, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Search from './Search';
import Directions from './Directions';
import Details from './Details';
import Back from './Back';
import {getPixelSize} from '../../utils';
import markerImage from '../../assets/marker.png';
import styles from './styles';

Geocoder.init(GOOGLE_MAPS_API_KEY);

export default () => {
  const navigation = useNavigation();

  const [region, setRegion] = useState(null);
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [readyResult, setReadyResult] = useState(null);

  const mapViewRef = useRef(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      async ({coords: {latitude, longitude}}) => {
        const response = await Geocoder.from({latitude, longitude});
        const address = response.results[0].formatted_address;
        const newLocation = address.substring(0, address.indexOf(','));

        setLocation(newLocation);

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

  useEffect(() => {
    if (readyResult) {
      mapViewRef.current.fitToCoordinates(readyResult.mapCoordinates, {
        edgePadding: {
          right: getPixelSize(24),
          left: getPixelSize(24),
          bottom: getPixelSize(324),
          top: getPixelSize(24),
        },
      });
    }
  }, [readyResult]);

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

  const handleBack = () => {
    setDestination(null);
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
                setReadyResult({
                  duration: Math.floor(result.duration),
                  mapCoordinates: result.coordinates,
                });
              }}
            />
            <Marker
              coordinate={destination}
              anchor={{x: 0, y: 0}}
              image={markerImage}>
              <View style={styles.locationBox}>
                <Text style={styles.locationText}>{destination.title}</Text>
              </View>
            </Marker>

            <Marker coordinate={region} anchor={{x: 0, y: 0}}>
              <View style={styles.locationBox}>
                <View style={styles.locationTimeBox}>
                  <Text style={styles.locationTimeText}>
                    {readyResult?.duration}
                  </Text>
                  <Text style={styles.locationTimeTextSmall}>MIN</Text>
                </View>
                <Text style={styles.locationText}>{location}</Text>
              </View>
            </Marker>
          </>
        )}
      </MapView>

      {destination ? (
        <>
          <Back onPress={handleBack} />
          <Details />
        </>
      ) : (
        <Search onLocationSelected={handleLocationSelected} />
      )}
    </SafeAreaView>
  );
};

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Search from './Search';
import styles from './styles';

export default () => {
  const [region, setRegion] = useState(null);
  const navigation = useNavigation();

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

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        showsUserLocation
        loadingEnabled
      />
      <Search />
    </SafeAreaView>
  );
};

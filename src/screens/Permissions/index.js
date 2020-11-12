import React, {useEffect, useCallback} from 'react';
import {View, PermissionsAndroid, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from './Button';
import styles from './styles';

export default () => {
  const navigation = useNavigation();

  const requestPermissions = useCallback(async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Map',
          },
        ],
      });
    }
  }, [navigation]);

  useEffect(() => {
    requestPermissions();
  }, [requestPermissions]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Para utilizar o aplicativo é necessário liberar as permissões
        </Text>
        <Button onPress={requestPermissions}>Tentar Novamente</Button>
      </View>
    </View>
  );
};

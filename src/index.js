import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigations from './navigations';
import 'react-native-gesture-handler';

export default () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </>
  );
};

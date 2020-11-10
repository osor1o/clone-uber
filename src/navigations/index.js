import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Map from '../screens/Map';
import Permissions from '../screens/Permissions';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Permissions" component={Permissions} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

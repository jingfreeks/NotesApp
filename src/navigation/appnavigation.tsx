import React from 'react';
import bottomtab from './bottomtabnavigation';
import {Navigation} from './constant';
import type {AppNavigationProps, RootNavigationProps} from './types';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<
  RootNavigationProps & AppNavigationProps
>();

export const Appnavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={bottomtab}
        name={Navigation.bottomtab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

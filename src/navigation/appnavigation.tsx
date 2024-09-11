import React from 'react';
import bottomtab from './bottomtabnavigation';
import {Navigation} from './constant';
import type {AppNavigationProps, RootNavigationProps} from './types';
import {
  createStackNavigator,
} from '@react-navigation/stack';

const Stack = createStackNavigator<
  RootNavigationProps & AppNavigationProps
>();

export const Appnavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={bottomtab}
        name={Navigation.Bottomtab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

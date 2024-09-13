import React from 'react';
import bottomtab from './bottomtabnavigation';
import {Navigation} from './constant';
import {Notes, NotesMap} from '@/screens';
import type {AppNavigationProps, RootNavigationProps} from './types';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<RootNavigationProps & AppNavigationProps>();

export const Appnavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={bottomtab}
        name={Navigation.Bottomtab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Notes}
        name={Navigation.Notes}
        options={{
          headerBackTitleVisible: false,
          headerShown: true,
          title: 'Notes Form',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        component={NotesMap}
        name={Navigation.NotesMap}
        options={{
          headerBackTitleVisible: false,
          headerShown: true,
          title: 'Notes Map',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

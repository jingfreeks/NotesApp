import React from 'react';
import {Login, Welcome, Signup} from '@/screens';
import {colors} from '@/utils/themes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Navigation} from './constant';

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Welcome}
        name={Navigation.Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Login}
        name={Navigation.Login}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: colors.blue,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: true,
          title: 'SIGN IN',
        }}
      />
      <Stack.Screen
        component={Signup}
        name={Navigation.Signup}
        options={{
          headerBackTitleVisible: false,
          headerShown: true,
          title: 'SIGN UP',
          headerTintColor: colors.blue,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

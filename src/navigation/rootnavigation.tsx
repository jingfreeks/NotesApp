
import React from 'react'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {AuthNavigation} from './authnavigation';
import {Appnavigation} from './appnavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {State} from '@/config/types';
import type {RootNavigationProps,AppNavigationProps} from './types';
import {useSelector} from 'react-redux';
import {Navigation} from './constant';

const Stack = createNativeStackNavigator<AppNavigationProps&RootNavigationProps>();

const RootNavigationScreen = () => {
  const navigationRef = useNavigationContainerRef<AppNavigationProps&RootNavigationProps>();
  const token = useSelector((state: State) => state.auth.token);
  console.log('token',token)
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={token ? Navigation.App : Navigation.Auth}
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        {token ? (
          <Stack.Screen
            component={Appnavigation}
            name={Navigation.App}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            component={AuthNavigation}
            name={Navigation.Auth}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigationScreen;

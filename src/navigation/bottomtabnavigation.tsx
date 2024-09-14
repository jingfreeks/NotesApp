import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Maps} from '@/screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Navigation} from './constant';
import type {RootNavigationProps,AppNavigationProps} from './types';
import {colors} from '@/utils/themes';
const Tab = createBottomTabNavigator<RootNavigationProps&AppNavigationProps>();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.black,
      }}>
      <Tab.Screen
        component={Home}
        name={Navigation.Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <FontAwesome color={colors.gray} name={'home'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={Maps}
        name={Navigation.Map}
        options={{
          tabBarLabel: 'Map',
          title: 'Map',
          tabBarIcon: () => (
            <FontAwesome color={colors.gray} name={'map-marker'} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;

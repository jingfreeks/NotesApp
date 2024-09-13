import React from 'react'
import {Home} from '@/screens';
import type {AppNavigationProps, RootNavigationProps} from './types';
import bottomtab from './bottomtabnavigation';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator<
  RootNavigationProps & AppNavigationProps
>();
export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Sign-out" onPress={() => console.log('test')} />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="Home" component={bottomtab} />
    </Drawer.Navigator>
  );
};

import React from 'react';
import type {AppNavigationProps, RootNavigationProps} from './types';
import {setCredentials} from '@/slice/auth';
import {useAppDispatch} from '@/config/hooks';
import bottomtab from './bottomtabnavigation';
import {apiSlice} from '@/config/apiSlice'
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
  const dispatch = useAppDispatch();

  const handleSignout = async() => {
    await dispatch(setCredentials({user: null, accessToken: null, userId: null}));
    await dispatch(apiSlice.util.resetApiState())
  };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Sign-out" onPress={() => handleSignout()} />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="Home" component={bottomtab} />
    </Drawer.Navigator>
  );
};

import React from 'react';
import {setCredentials} from '@/slice/auth';
import {useAppDispatch} from '@/config/hooks'
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
export const useSignupHooks = () => {
  const dispatch=useAppDispatch()
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const handleLogin = () => {
    dispatch(setCredentials({accessToken:'test'}))
    // navigation.navigate('Otp')
  };
  return {
    handleLogin,
  };
};

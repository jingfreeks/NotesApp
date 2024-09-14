import React from 'react';
import auth from '@react-native-firebase/auth';
import {Schema} from './component/form/schema';
import { SubmitHandler} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';

import {useFsignupMutation} from '@/slice/authApi';
import * as yup from 'yup';

export const useSignupHooks = () => {
  type FormData = yup.InferType<typeof Schema>;
  const [fsignup, {isLoading}] = useFsignupMutation();
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const handleSignup:SubmitHandler<FormData>  = async(data) => {
    try{
      await fsignup({
        email: data.email,
        password: data.password,
      }).unwrap();
      navigation.navigate('Login')
    }catch(error){
      alert(error.message)
    }
  };
  return {
    handleSignup,
  };
};

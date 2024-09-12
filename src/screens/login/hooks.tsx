import React from 'react';
import {setCredentials} from '@/slice/auth';
import {useAppDispatch} from '@/config/hooks'
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SubmitHandler} from 'react-hook-form'
import type {RootNavigationProps} from '@/navigation/types';
import * as yup from 'yup';
import {Schema} from './component/form/schema'
import auth from '@react-native-firebase/auth';
export const useSignupHooks = () => {
  const dispatch=useAppDispatch()
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  type FormData = yup.InferType<typeof Schema>;
  const handleLogin = () => {
    dispatch(setCredentials({accessToken:'test'}))
  };
  const onAuthStateChanged=(user:any)=>{
    if(user){

    }
  }

  const signInWithPhoneNumber:SubmitHandler<FormData> =async(data)=>{
    try{
      const userCredential= await auth().signInWithEmailAndPassword(data.email, data.password)
      dispatch(setCredentials({accessToken:userCredential?.user?.uid}))
    }catch(error){
      alert('Invalid Email and password')
    }
  }
  return {
    handleLogin,
    onAuthStateChanged,
    signInWithPhoneNumber
  };
};

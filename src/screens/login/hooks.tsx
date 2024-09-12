import React from 'react';
import {setCredentials} from '@/slice/auth';
import {useAppDispatch} from '@/config/hooks'
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import auth from '@react-native-firebase/auth';
export const useSignupHooks = () => {
  const dispatch=useAppDispatch()
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const handleLogin = () => {
    dispatch(setCredentials({accessToken:'test'}))
  };
  const onAuthStateChanged=(user:any)=>{
    if(user){

    }
  }

  const signInWithPhoneNumber=async(phoneNo:string)=>{
    try{
      const userCredential= await auth().signInWithEmailAndPassword('lyndell.dobluis@gmail.com', 'Jingfreeks99!')
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

import React from 'react';
import auth from '@react-native-firebase/auth';
import {Schema} from './component/form/schema';
import { SubmitHandler} from 'react-hook-form';
import {setCredentials} from '@/slice/auth';
import {useAppDispatch} from '@/config/hooks'
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import * as yup from 'yup';

export const useSignupHooks = () => {
  type FormData = yup.InferType<typeof Schema>;
  const dispatch=useAppDispatch()
  const handleSignup:SubmitHandler<FormData>  = async(data) => {
    try{
      const confirm= await auth().createUserWithEmailAndPassword(data.email, data.password)
      dispatch(setCredentials({accessToken:confirm?.user?.uid}))
      console.log('confirm',confirm)
    }catch(error){
      console.log('error',error)
      alert(error.message)
    }
  };
  return {
    handleSignup,
  };
};

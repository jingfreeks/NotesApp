import React from 'react';
import {Alert} from 'react-native'
import {setCredentials} from '@/slice/auth';
import {useAppDispatch} from '@/config/hooks'
import {SubmitHandler} from 'react-hook-form'
import * as yup from 'yup';
import {Schema} from './component/form/schema'
import {useFloginMutation} from '@/slice/authApi';
export const useSignupHooks = () => {
  const dispatch=useAppDispatch()
  const [flogin] = useFloginMutation();
  type FormData = yup.InferType<typeof Schema>;
  const handleSignIn:SubmitHandler<FormData> =async(data)=>{
    try{
      const userData: any = await flogin({
        email: data.email,
        password: data.password,
      }).unwrap();
      if(userData.isError){
        alert('Invalid Email or password')
      }else{
        dispatch(setCredentials({...userData}))
      }
     
    }catch(error){
      alert('Invalid Email and password')
    }
  }
  return {
    handleSignIn
  };
};

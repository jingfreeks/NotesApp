import React from 'react';
import {setCredentials} from '@/slice/auth';
import {useAppDispatch} from '@/config/hooks'
import {SubmitHandler} from 'react-hook-form'
import * as yup from 'yup';
import {Schema} from './component/form/schema'
import {useFloginMutation} from '@/slice/authApi';
export const useSignupHooks = () => {
  const dispatch=useAppDispatch()
  const [flogin, {isLoading}] = useFloginMutation();
  type FormData = yup.InferType<typeof Schema>;

  const handleSignIn:SubmitHandler<FormData> =async(data)=>{
    try{
      const userData: any = await flogin({
        email: data.email,
        password: data.password,
      }).unwrap();
      dispatch(setCredentials({...userData}))
    }catch(error){
      alert('Invalid Email and password')
    }
  }
  return {
    handleSignIn
  };
};

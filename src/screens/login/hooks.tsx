import React from 'react';
import {setCredentials} from '@/slice/auth';
import {useAppDispatch} from '@/config/hooks'
export const useSignupHooks = () => {
  const dispatch=useAppDispatch()
  const handleLogin = () => {
    console.log('test')
    dispatch(setCredentials({accessToken:'test'}))
  };
  return {
    handleLogin,
  };
};

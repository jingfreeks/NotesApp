import React from 'react';
import {setCredentials} from '@/slice/auth';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
export const useSignupHooks = () => {
  const handleSignup = () => {
    console.log('test')
  };
  return {
    handleSignup,
  };
};

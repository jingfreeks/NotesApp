import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps,AppNavigationProps} from '@/navigation/types';

export const UseHomeHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const handleCreateNotes = () => {
    navigation.navigate('Notes')
  };
  return {
    handleCreateNotes,
  };
};
